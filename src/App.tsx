import React, { useEffect } from "react";

// Keeping these commented for one more second to ensure stability
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import "/assets/css/particles.css"; 

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
    <div className="bg-black text-white min-h-screen font-sans">
      {/* INTERNAL NAV - Stable Version */}
      <nav className="p-6 border-b border-green-900/30 flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-green-500">AMINE_SEC</div>
        <div className="space-x-8 hidden md:flex font-mono text-sm">
          <a href="#home" className="hover:text-green-500">01_HOME</a>
          <a href="#services" className="hover:text-green-500">02_SERVICES</a>
          <a href="#contact" className="hover:text-green-500">03_CONTACT</a>
        </div>
      </nav>

      <main id="home" className="w-full">
        {/* HERO SECTION */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="max-w-screen-xl px-4 mx-auto grid lg:grid-cols-12 gap-8 relative z-10">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-none mb-6">
                Secure Your Future with <br/>
                <span className="text-green-500">Ethical Hacking</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl">
                Deep-dive penetration testing and proactive threat monitoring to protect your digital assets.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all transform hover:scale-105">
                  INITIALIZE CONTACT
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center">
               <img src="/assets/images/hacker.png" alt="hacker" className="w-full max-w-md opacity-80" />
            </div>
          </div>
        </section>

        {/* ACCOLADES */}
        <section className="py-20 border-y border-green-900/30 bg-zinc-950">
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <h2 className="text-6xl font-bold text-white mb-2"><span data-counter-target="20">0</span>+</h2>
                <p className="text-green-500 font-mono tracking-widest">YEARS_EXP</p>
              </div>
              <div>
                <h2 className="text-6xl font-bold text-white mb-2"><span data-counter-target="300">0</span>+</h2>
                <p className="text-green-500 font-mono tracking-widest">ENGAGEMENTS</p>
              </div>
              <div>
                <h2 className="text-6xl font-bold text-white mb-2"><span data-counter-target="10000">0</span></h2>
                <p className="text-green-500 font-mono tracking-widest">COFFEE_UNITS</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 text-center text-zinc-600 font-mono text-xs">
        [TERMINAL ACCESS GRANTED] // © 2026 AMINE_SEC
      </footer>
    </div>
  );
};

export default App;
