import { Block } from '@/types/index';

export default function processBlocks(blocks: Block[]) {
  return blocks.map((block) => {
    switch (block.type) {
      case 'heading_1':
        if (block.heading_1) {
          return {
            type: 'h1',
            content: block.heading_1.rich_text.map((rt) => {
              return {
                text: rt.text.content,
                class: createTailwindClassName(rt.annotations),
                href: rt.href,
              };
            }),
          };
        }
        break;

      case 'heading_2':
        if (block.heading_2) {
          return {
            type: 'h2',
            content: block.heading_2.rich_text.map((rt) => {
              return {
                text: rt.text.content,
                class: createTailwindClassName(rt.annotations),
                href: rt.href,
              };
            }),
          };
        }
        break;

      case 'heading_3':
        if (block.heading_3) {
          return {
            type: 'h3',
            content: block.heading_3.rich_text.map((rt) => {
              return {
                text: rt.text.content,
                class: createTailwindClassName(rt.annotations),
                href: rt.href,
              };
            }),
          };
        }
        break;

      case 'paragraph':
        if (block.paragraph) {
          if (block.paragraph.rich_text.length === 0)
            return {
              type: 'br',
              content: null,
            };

          const enrichedText = block.paragraph.rich_text.map((rt) => {
            return {
              text: rt.text.content,
              class: createTailwindClassName(rt.annotations),
              href: rt.href,
            };
          });
          return {
            type: 'p',
            content: enrichedText,
          };
        }
        break;

      case 'image':
        if (block.image && block.image.file) {
          return {
            type: 'img',
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

function createTailwindClassName(annotations: {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}): string {
  const classes = [];

  if (annotations.bold) classes.push('font-bold');
  if (annotations.italic) classes.push('italic');
  if (annotations.strikethrough) classes.push('line-through');
  if (annotations.underline) classes.push('underline');
  if (annotations.code) classes.push('font-mono');

  switch (annotations.color) {
    case 'default':
      break;
    case 'red':
      classes.push('text-red-500');
      break;
    case 'blue':
      classes.push('text-blue-500');
      break;
    // Add more colors as needed
    default:
      classes.push(`text-${annotations.color}-500`);
      break;
  }

  return classes.join(' ');
}
