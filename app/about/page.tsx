'use client';
import React from 'react';
import { createElement } from 'react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('/api/fetch-page/about')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setContent(data);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12">
      {content &&
        content.map((element: any, index: number) => {
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
}
