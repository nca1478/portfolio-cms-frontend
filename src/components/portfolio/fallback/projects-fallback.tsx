export const ProjectsFallback = () => (
  <section className="my-10 scroll-mt-28 md:mb-20">
    <div className="bg-muted mx-auto mb-10 h-8 w-32 animate-pulse rounded" />
    <div className="grid gap-6 md:grid-cols-2">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-muted h-64 w-full animate-pulse rounded" />
      ))}
    </div>
  </section>
);
