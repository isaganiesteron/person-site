'use client';
import React from 'react';
import { useState, useEffect } from 'react';

import ContentRenderer from '@/components/ContentRenderer';

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
      {content && <ContentRenderer content={content} />}
    </div>
  );
}
