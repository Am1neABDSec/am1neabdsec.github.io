import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-counter-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      const updateCount = () => {
        const current = +counter.innerHTML;
        const increment = target / 100;
        if (current < target) {
          counter.innerHTML = `${Math.ceil(current + increment)}`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerHTML = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Nav />
      
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* HERO AREA */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
          SYSTEM <span className="text-green-500">OPERATIONAL</span>
        </h1>
        <p className="text-gray-400 text-xl mb-12 font-mono">Status: Connected to GitHub Pages</p>

        {/* THE IMAGE BLOCK */}
        <div className="mb-12 border-2 border-green-900 p-4 rounded-xl bg-zinc-950">
          <img 
            src="/assets/images/hacker.png" 
            alt="Hacker Logo" 
            className="w-48 h-auto mx-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              console.log("Image not found in public/assets/images/hacker.png");
            }}
          />
          <p className="text-xs text-green-800 mt-2 font-mono">IMAGE_PATH: /public/assets/images/hacker.png</p>
        </div>

        {/* COUNTERS */}
        <div className="grid grid-cols-2 gap-10 md:gap-20">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-white" data-counter-target="20">0</span>
            <span className="text-green-500 font-mono text-sm tracking-widest">YEARS_EXP</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-white" data-counter-target="300">0</span>
            <span className="text-green-500 font-mono text-sm tracking-widest">PROJECTS</span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
