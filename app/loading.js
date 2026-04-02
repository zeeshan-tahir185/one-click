export default function Loading() {
  return (
    <main className="site-container flex min-h-[60vh] items-center justify-center py-24">
      <div className="soft-card-sm flex items-center gap-4 px-8 py-6">
        <div className="h-4 w-4 animate-pulse rounded-full bg-[#0f3cc9]" />
        <div className="text-sm font-semibold text-slate-700">Loading Cars24 experience...</div>
      </div>
    </main>
  );
}
