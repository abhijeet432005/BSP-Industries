import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-mono text-sm text-accent-dark">404</p>
      <h1 className="mt-3 text-2xl font-medium text-ink sm:text-3xl">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The page may have moved. Try the catalog or head back to the homepage.
      </p>
      <div className="mt-7 flex gap-3">
        <Button asChild variant="accent">
          <Link href="/products">Browse catalog</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
