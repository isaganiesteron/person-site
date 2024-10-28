'use client';
import React from 'react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('/api/fetch-page/about')
      .then((res) => res.json())
      .then((data) => {
        setContent(data);
      });
  }, []);

  return (
    <div className="container mx-auto max-w-4xl py-12">
      {content &&
        content.map((block: any, blockInd: number) => {
          switch (block.type) {
            case 'heading_1':
              return (
                <h1 className="mb-8 text-4xl font-bold" key={blockInd}>
                  {block.content}
                </h1>
              );
            case 'paragraph':
              return <p key={blockInd}>{block.content}</p>;
            case 'image':
              return <img key={blockInd} src={block.content.url} alt="Notion Image" />;
          }
        })}
    </div>
  );
}
