import { useEffect, useRef } from "react";

function Hero() {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e) => {
      const { clientX: x, clientY: y } = e;
      el.style.setProperty("--x", `${x}px`);
      el.style.setProperty("--y", `${y}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="relative isolate pt-28 md:pt-32">
      {/* Background gradient and glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-300 to-purple-100 blur-3xl opacity-60" />
        <div
          ref={glowRef}
          className="absolute inset-0 [background:radial-gradient(600px_at_var(--x)_var(--y),rgba(168,85,247,0.15),transparent_60%)]"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-black text-white px-3 py-1 text-xs md:text-[13px]">
              Award-winning Design Studio
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              We craft delightful digital experiences
            </h1>
            <p className="mt-4 text-base text-black/60 md:text-lg">
              Partner with a team focused on usability, brand consistency, and
              high-performance frontends.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90"
              >
                View our work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-black/15 px-5 py-3 text-sm font-medium hover:bg-black/5"
              >
                Get in touch
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 opacity-80">
              <div className="text-sm">Trusted by</div>
              <div className="flex items-center gap-6">
                <span className="h-6 w-20 rounded bg-black/10" />
                <span className="h-6 w-16 rounded bg-black/10" />
                <span className="h-6 w-24 rounded bg-black/10" />
              </div>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-amber-50" />
              <div className="relative grid h-full grid-cols-3 gap-3 p-5">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-black/5 shadow-inner transition-transform duration-300 hover:-translate-y-1"
                  />
                ))}
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-4 -top-4 hidden md:block">
              <div className="rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5">
                <div className="text-xs text-black/60">Satisfaction</div>
                <div className="text-lg font-semibold">98%</div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-12 hidden md:block">
              <div className="rounded-full bg-black px-4 py-3 text-white shadow-xl">
                <span className="text-sm">Top Rated</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
