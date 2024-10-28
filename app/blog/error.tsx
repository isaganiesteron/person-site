"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex h-[50vh] max-w-4xl flex-col items-center justify-center space-y-4">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground">
          An error occurred while loading the data.
        </p>
      </div>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}