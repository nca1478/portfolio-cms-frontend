export default function Loading() {
  return (
    <div className="container flex flex-col items-center">
      {/* Header skeleton */}
      <div className="bg-muted mb-10 h-16 w-full animate-pulse rounded" />

      {/* Intro skeleton */}
      <section className="my-10 flex scroll-mt-96 flex-col items-center gap-5 text-center sm:mt-28">
        <div className="bg-muted h-8 w-48 animate-pulse rounded" />
        <div className="bg-muted h-16 w-full max-w-3xl animate-pulse rounded" />
        <div className="bg-muted h-20 w-full max-w-xl animate-pulse rounded" />
        <div className="flex flex-row gap-2">
          <div className="bg-muted h-11 w-32 animate-pulse rounded" />
          <div className="bg-muted h-11 w-32 animate-pulse rounded" />
        </div>
      </section>

      {/* Section divider */}
      <div className="bg-muted my-10 h-1 w-24 animate-pulse rounded" />

      {/* About skeleton */}
      <section className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20">
        <div className="bg-muted mb-5 h-8 w-32 animate-pulse rounded" />
        <div className="-mt-5 max-w-2xl space-y-4">
          <div className="bg-muted h-20 w-full animate-pulse rounded" />
          <div className="bg-muted h-20 w-full animate-pulse rounded" />
        </div>
      </section>

      {/* Skills skeleton */}
      <section className="my-10 scroll-mt-28 md:mb-20">
        <div className="bg-muted mb-5 h-8 w-32 animate-pulse rounded" />
        <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="bg-muted size-16 animate-pulse rounded" />
          ))}
        </div>
      </section>

      {/* Experience skeleton */}
      <section className="my-10 scroll-mt-28 md:mb-20">
        <div className="bg-muted mb-5 h-8 w-32 animate-pulse rounded" />
        <div className="relative max-w-screen-md space-y-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-muted h-40 w-full animate-pulse rounded"
            />
          ))}
        </div>
      </section>

      {/* Projects skeleton */}
      <section className="my-10 scroll-mt-28 md:mb-20">
        <div className="bg-muted mb-5 h-8 w-32 animate-pulse rounded" />
        <div className="flex flex-col gap-7 md:flex-row">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-muted h-96 w-full animate-pulse rounded"
            />
          ))}
        </div>
      </section>

      {/* Contact skeleton */}
      <div className="bg-muted mb-10 h-64 w-full animate-pulse rounded" />

      {/* Footer skeleton */}
      <div className="bg-muted h-16 w-full animate-pulse rounded" />
    </div>
  );
}
