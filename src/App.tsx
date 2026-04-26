import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    // Logic for counting up the numbers
    const counters = document.querySelectorAll('[data-counter-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      let count = 0;
      const updateCount = () => {
        const increment = target / 80;
        if (count < target) {
          count += increment;
          counter.innerHTML = `${Math.ceil(count)}`;
          setTimeout(updateCount, 25);
        } else {
          counter.innerHTML = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black">
      <Nav />
      
      <main className="max-w-screen-xl mx-auto px-6 py-20">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <div className="inline-block px-3 py-1 border border-green-500 text-green-500 text-xs font-mono mb-4 animate-pulse">
              STATUS: ENCRYPTED_CONNECTION_ESTABLISHED
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
              SECURE <br/> <span className="text-green-500">SYSTEMS.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg font-light leading-relaxed">
              Professional penetration testing and offensive security solutions. I find the holes before the bad guys do.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold uppercase tracking-widest transition-all">
                Execute Mission
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            {/* The Image Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="/assets/images/hacker.png" 
                alt="Security Expert" 
                className="relative w-80 h-auto md:w-96 grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => { e.currentTarget.src = "https://img.icons8.com/ios-filled/250/22c55e/security-checked.png" }}
              />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 border-y border-zinc-900 grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-2 font-mono text-green-500">
              <span data-counter-target="20">0</span>+
            </h2>
            <p className="text-gray-500 uppercase tracking-tighter text-sm">Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-2 font-mono text-green-500">
              <span data-counter-target="300">0</span>+
            </h2>
            <p className="text-gray-500 uppercase tracking-tighter text-sm">Vulnerabilities Found</p>
          </div>
          <div className="text-center hidden md:block">
            <h2 className="text-5xl md:text-7xl font-bold mb-2 font-mono text-green-500">
              <span data-counter-target="100">0</span>%
            </h2>
            <p className="text-gray-500 uppercase tracking-tighter text-sm">Success Rate</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
