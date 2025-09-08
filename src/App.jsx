import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      {/* Below hero content */}
      <section id="work" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-6">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Project A",
              desc: "Short description, animations and cards.",
            },
            {
              title: "Project B",
              desc: "Short description, hover interactions.",
            },
            {
              title: "Project C",
              desc: "Short description, responsive layout.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="group p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video w-full rounded-xl bg-black/5 mb-4" />
              <h3 className="font-medium">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
              <span className="mt-4 inline-flex items-center text-sm text-black/70 group-hover:translate-x-0.5 transition-transform">
                View case study →
              </span>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-medium">UI/UX Design</h3>
            <p className="mt-2 text-sm text-gray-600">
              Wireframes, prototypes, and user testing for intuitive interfaces.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-medium">Frontend Development</h3>
            <p className="mt-2 text-sm text-gray-600">
              Modern, accessible, and performant web experiences using React.
            </p>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-black/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Let’s build something great</h3>
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Start a project
          </a>
        </div>
      </footer>
    </div>
  );
}
