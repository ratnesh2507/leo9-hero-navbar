import { useEffect, useState } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState("");
  const [openMobile, setOpenMobile] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const services = [
    {
      title: "Design.",
      desc: "Handcraft the user experience.",
      color: "bg-rose-50",
    },
    {
      title: "Technology.",
      desc: "Leverage the power of code.",
      color: "bg-indigo-50",
    },
    {
      title: "Marketing.",
      desc: "Creative strategies for brands.",
      color: "bg-violet-50",
    },
  ];
  const about = [
    {
      title: "About Us.",
      desc: "We are super‑efficient and humble.",
      color: "bg-rose-50",
    },
    {
      title: "Team.",
      desc: "Experienced and accomplished team!",
      color: "bg-indigo-50",
    },
    {
      title: "Career.",
      desc: "Can you offer such experience?",
      color: "bg-violet-50",
    },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        isScrolled ? "backdrop-blur-md bg-white/70 shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-md bg-black" />
            <span className="font-semibold">LEO9</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm hover:text-black/80">
              Work
            </a>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDesktop("services")}
              onMouseLeave={() => setOpenDesktop("")}
            >
              <button
                className="text-sm hover:text-black/80 inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={openDesktop === "services"}
                onFocus={() => setOpenDesktop("services")}
                onBlur={() => setOpenDesktop("")}
              >
                Services
                <span
                  className={`inline-block transition-transform ${
                    openDesktop === "services" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {openDesktop === "services" && (
                <div className="absolute left-1/2 w-[720px] -translate-x-1/2 pt-4">
                  <div className="grid grid-cols-3 gap-4 rounded-3xl border border-black/10 bg-white p-4 shadow-xl">
                    {services.map((s) => (
                      <a
                        key={s.title}
                        href="#services"
                        className={`rounded-2xl ${s.color} p-5 hover:shadow transition-shadow`}
                      >
                        <div className="text-2xl font-semibold">{s.title}</div>
                        <div className="mt-2 text-sm text-black/70">
                          {s.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDesktop("about")}
              onMouseLeave={() => setOpenDesktop("")}
            >
              <button
                className="text-sm hover:text-black/80 inline-flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded={openDesktop === "about"}
                onFocus={() => setOpenDesktop("about")}
                onBlur={() => setOpenDesktop("")}
              >
                About
                <span
                  className={`inline-block transition-transform ${
                    openDesktop === "about" ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>
              </button>
              {openDesktop === "about" && (
                <div className="absolute left-1/2 w-[720px] -translate-x-1/2 pt-4">
                  <div className="grid grid-cols-3 gap-4 rounded-3xl border border-black/10 bg-white p-4 shadow-xl">
                    {about.map((s) => (
                      <a
                        key={s.title}
                        href="#about"
                        className={`rounded-2xl ${s.color} p-5 hover:shadow transition-shadow`}
                      >
                        <div className="text-2xl font-semibold">{s.title}</div>
                        <div className="mt-2 text-sm text-black/70">
                          {s.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#contact" className="text-sm hover:text-black/80">
              Contact
            </a>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90"
            >
              Get in touch
            </a>
            <button
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <div className="space-y-1.5">
                <span
                  className={`block h-0.5 w-5 bg-black transition-transform ${
                    isMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-4 bg-black ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-black transition-transform ${
                    isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            isMenuOpen ? "max-h-[640px]" : "max-h-0"
          }`}
        >
          <div className="border-t border-black/10 py-3 space-y-1">
            <a href="#work" className="block px-1 py-2">
              Work
            </a>

            {/* Mobile accordion: Services */}
            <button
              className="flex w-full items-center justify-between px-1 py-2 text-left"
              onClick={() =>
                setOpenMobile(openMobile === "services" ? "" : "services")
              }
            >
              <span>Services</span>
              <span
                className={`transition-transform ${
                  openMobile === "services" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] ${
                openMobile === "services" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-3 py-2">
                {services.map((s) => (
                  <a
                    key={s.title}
                    href="#services"
                    className={`rounded-xl ${s.color} p-4`}
                  >
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm text-black/70">{s.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile accordion: About */}
            <button
              className="flex w-full items-center justify-between px-1 py-2 text-left"
              onClick={() =>
                setOpenMobile(openMobile === "about" ? "" : "about")
              }
            >
              <span>About</span>
              <span
                className={`transition-transform ${
                  openMobile === "about" ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] ${
                openMobile === "about" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="grid grid-cols-1 gap-3 py-2">
                {about.map((s) => (
                  <a
                    key={s.title}
                    href="#about"
                    className={`rounded-xl ${s.color} p-4`}
                  >
                    <div className="font-medium">{s.title}</div>
                    <div className="text-sm text-black/70">{s.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            <a href="#contact" className="block px-1 py-2">
              Contact
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center rounded-full bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
