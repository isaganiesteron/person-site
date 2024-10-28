import { Block } from '@/types/index';

interface ProcessedBlock {
  type: string;
  content: string | { url: string } | null;
  annotations?: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
}

export default function processBlocks(blocks: Block[]): ProcessedBlock[] {
  return blocks.map((block) => {
    switch (block.type) {
      case 'heading_1':
        if (block.heading_1) {
          return {
            type: 'heading_1',
            content: block.heading_1.rich_text.map((rt) => rt.text.content).join(' '),
          };
        }
        break;

      case 'paragraph':
        if (block.paragraph) {
          const enrichedText = block.paragraph.rich_text
            .map((rt) => {
              if (rt.text.link) {
                return `<a href="${rt.text.link.url}">${rt.text.content}</a>`;
              }
              return rt.text.content;
            })
            .join(' ');
          return {
            type: 'paragraph',
            content: enrichedText,
          };
        }
        break;

      case 'image':
        if (block.image && block.image.file) {
          return {
            type: 'image',
            content: {
              url: block.image.file.url,
            },
          };
        }
        break;

      // Add cases for other types if needed

      default:
        return {
          type: block.type,
          content: null,
        };
    }
    return {
      type: block.type,
      content: null,
    };
  });
}
