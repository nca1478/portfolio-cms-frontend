export const ExperienceFallback = () => (
  <section className="my-10 scroll-mt-28 md:mb-20">
    <div className="bg-muted mx-auto mb-10 h-8 w-32 animate-pulse rounded" />
    <div className="relative max-w-screen-md space-y-10">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-muted h-40 w-full animate-pulse rounded" />
      ))}
    </div>
  </section>
);
