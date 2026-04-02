import { PrimaryButton } from "@/components/cars24/ui";

export default function NotFound() {
  return (
    <main className="site-container flex min-h-[70vh] items-center justify-center py-24">
      <div className="soft-card max-w-2xl px-8 py-12 text-center sm:px-12">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl">
          The page you are looking for is not available
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600">
          The Cars24-style page may have moved, or the route has not been recreated in
          this frontend clone yet. Head back home and continue browsing.
        </p>
        <div className="mt-8 flex justify-center">
          <PrimaryButton href="/" label="Go to homepage" />
        </div>
      </div>
    </main>
  );
}
