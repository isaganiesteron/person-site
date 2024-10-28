import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';
import processBlocks from '@/lib/processBlocks';
import { Block } from '@/types';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function GET(request: Request, params: any) {
  const { name } = params.params;
  const requestedPage = await findPage(name);
  if (!requestedPage) return NextResponse.json({ error: 'Page not found' }, { status: 404 });
  const page = await getPage(requestedPage.id);
  const processedBlocks = processBlocks(page as Block[]);
  return NextResponse.json(processedBlocks);
}

const findPage = async (name: string) => {
  const databaseId = process.env.DATABASE_ID;
  if (!databaseId) throw new Error('DATABASE_ID is not defined');

  const database = await notion.databases.query({
    database_id: databaseId,
  });

  const pages = database.results
    .map((page: any) => {
      return {
        name: page.properties.Name.title[0].text.content.toLowerCase(),
        id: page.id,
      };
    })
    .filter((x) => x.name === name.toLowerCase());
  return pages[0] ?? null;
};

const getPage = async (pageId: string) => {
  const { results } = await notion.blocks.children.list({
    block_id: pageId as string,
  });
  return results;
};
