export const SkillsFallback = () => (
  <section className="my-10 scroll-mt-28 md:mb-20">
    <div className="bg-muted mx-auto mb-10 h-8 w-32 animate-pulse rounded" />
    <div className="flex flex-wrap justify-center gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="bg-muted h-12 w-20 animate-pulse rounded" />
      ))}
    </div>
  </section>
);
