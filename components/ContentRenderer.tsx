import { createElement } from 'react';

const ContentRenderer = ({ content }: { content: any }) => {
  return (
    <div>
      {content.map((element: any, index: number) => {
        if (element.type === 'br') {
          return createElement('br', { key: index });
        } else if (element.type === 'img') {
          return createElement('img', {
            key: index,
            src: element.content.url,
            alt: 'Notion Image',
          });
        } else {
          const children = element.content.map((child: any, index: number) => {
            return createElement(
              child.href ? 'a' : 'span',
              {
                key: index,
                href: child.href,
                className: child.class,
              },
              child.text
            );
          });
          return createElement(element.type, { key: index }, children);
        }
      })}
    </div>
  );
};

export default ContentRenderer;
