import { Suspense } from "react";
import { CreatePost } from "@/components/create-post";
import Loading from "./loading";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container max-w-4xl py-12">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Blog</h1>
        <CreatePost />
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}