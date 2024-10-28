import { getPosts } from "@/lib/api";
import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="container max-w-4xl py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>•</span>
                <time dateTime={post.createdAt}>
                  {formatDistanceToNow(new Date(post.createdAt), {
                    addSuffix: true,
                  })}
                </time>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}