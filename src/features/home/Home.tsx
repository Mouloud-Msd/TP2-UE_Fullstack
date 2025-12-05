// import Overview from "./components/Overview";
// import { Outlet } from 'react-router-dom'
// function Home() {
//   return (
//     <>

//       <Header />
//       <Overview />

//     </>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  return (
    <section className="text-center px-6 py-20 bg-gradient-to-br from-indigo-50 via-white to-slate-50">
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
        TP2_UE_FS
      </h1>
      <p className="max-w-3xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
        Plongez au cœur de la scène culturelle locale en découvrant des
        événements musicaux et artistiques authentiques. Explorez les talents
        émergents qui façonnent la créativité de votre région et connectez-vous
        à une communauté passionnée partageant les mêmes centres d'intérêt.
        Transformez chaque sortie en une expérience mémorable et soutenez les
        artistes qui font vivre votre territoire.
      </p>
    </section>
  );
}

interface CarouselItem {
  description: string;
  image: string;
}

function CarouselDefault() {
  const slides: CarouselItem[] = [
    {
      description: "Découvrez des artistes uniques",
      image:
        "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200",
    },
    {
      description: "Explorez des événements vibrants",
      image:
        "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?q=80&w=1200",
    },
    {
      description: "Suivez vos favoris et leurs nouveautés",
      image:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?q=80&w=1200",
    },
    {
      description: "Trouvez ce qui se passe près de chez vous",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-3xl shadow-lg mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="relative"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={slides[current].image}
            alt={slides[current].description}
            className="w-full h-[350px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end justify-center pb-10">
            <p className="text-white text-lg md:text-2xl font-semibold drop-shadow-lg px-4 text-center">
              {slides[current].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Boutons de navigation */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
      >
        ❮
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md transition"
      >
        ❯
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current ? "bg-white w-4" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="px-4 py-12">
        <CarouselDefault />
      </section>
    </main>
  );
}
