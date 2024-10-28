import { NextResponse } from 'next/server';

const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    content: 'Next.js 14 introduces several new features...',
    author: 'John Doe',
    createdAt: '2024-01-01T00:00:00Z',
  },
  {
    id: 2,
    title: 'Understanding Server Components',
    content: 'Server Components are a new paradigm...',
    author: 'Jane Smith',
    createdAt: '2024-01-02T00:00:00Z',
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();

  // Validate the request body here
  if (!body.title || !body.content) {
    return NextResponse.json(
      { error: 'Title and content are required' },
      { status: 400 }
    );
  }

  const newPost = {
    id: posts.length + 1,
    title: body.title,
    content: body.content,
    author: body.author || 'Anonymous',
    createdAt: new Date().toISOString(),
  };

  posts.push(newPost);

  return NextResponse.json(newPost, { status: 201 });
}