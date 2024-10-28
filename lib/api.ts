export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`https://api.example.com/posts/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  return res.json();
}