import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  useEffect(() => {
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
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black font-sans">
      <Nav />
      
      <main className="max-w-screen-xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="grid lg:grid-cols-2 gap-12 items-center py-24 md:py-32">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-green-500/30 bg-green-500/5 text-green-500 text-xs font-mono mb-6 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              STATUS: ENCRYPTED_CONNECTION_ESTABLISHED
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
              SECURE <br/> <span className="text-green-500">SYSTEMS.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg font-light leading-relaxed">
              Elite-level penetration testing and offensive security research. I identify critical vulnerabilities before they become catastrophic breaches.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold uppercase tracking-widest transition-all rounded-sm">
                Execute Mission
              </a>
              <a href="#certs" className="px-8 py-4 border border-zinc-800 hover:border-green-500 text-white font-bold uppercase tracking-widest transition-all rounded-sm">
                View Credentials
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-green-500/20 rounded-2xl blur-2xl group-hover:bg-green-500/40 transition duration-1000"></div>
              <div className="relative bg-zinc-950 border border-white/10 p-2 rounded-2xl overflow-hidden">
                <img 
                  src="/hacker.png" 
                  alt="Am1neABDSec" 
                  className="w-84 h-auto md:w-96 rounded-xl grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                  onError={(e) => { 
                    e.currentTarget.src = "/hacker.png.png"; // Fallback for the double extension issue
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-20 border-y border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { label: "YEARS_EXP", val: "20" },
            { label: "VULNS_FOUND", val: "300" },
            { label: "BOUNTIES", val: "50" },
            { label: "SUCCESS_RATE", val: "100" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-1 font-mono text-green-500">
                <span data-counter-target={stat.val}>0</span>{stat.label === "SUCCESS_RATE" ? "%" : "+"}
              </h2>
              <p className="text-zinc-500 uppercase text-[10px] tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certs" className="py-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-green-500">01.</span> PROFESSIONAL_CREDENTIALS
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["OSCP", "CEH Master", "CISSP", "eJPT", "CompTIA Security+", "AWS Security"].map((cert) => (
              <div key={cert} className="p-6 bg-zinc-950 border border-zinc-900 hover:border-green-500/50 transition-colors group">
                <div className="h-1 w-8 bg-green-500 mb-4 group-hover:w-full transition-all duration-500"></div>
                <h3 className="text-xl font-bold mb-2">{cert}</h3>
                <p className="text-zinc-500 text-sm font-mono">Verified Certification</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
            <span className="text-green-500">02.</span> EXPERIENCE_LOGS
          </h2>
          <div className="space-y-12">
            {[
              { role: "Senior Lead Pentester", co: "SecureTech Corp", date: "2020 - Present" },
              { role: "Cyber Security Analyst", co: "Global Defense Ltd", date: "2016 - 2020" }
            ].map((job, i) => (
              <div key={i} className="border-l-2 border-zinc-800 pl-8 relative">
                <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-green-500 font-mono text-sm uppercase">{job.date}</span>
                <h3 className="text-2xl font-bold mt-1">{job.role}</h3>
                <p className="text-zinc-400 mt-2">{job.co}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="py-20 mb-20 bg-zinc-950 border border-green-500/20 p-8 md:p-12 rounded-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 italic">NEED A SECURITY AUDIT?</h2>
            <p className="text-zinc-400 mb-10 font-mono text-sm">Send an encrypted message below.</p>
            <form className="grid grid-cols-1 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="AGENT_NAME" className="bg-black border border-zinc-800 p-4 rounded focus:border-green-500 outline-none transition-colors" />
                <input type="email" placeholder="SECURE_EMAIL" className="bg-black border border-zinc-800 p-4 rounded focus:border-green-500 outline-none transition-colors" />
              </div>
              <textarea placeholder="MISSION_DETAILS" rows={4} className="bg-black border border-zinc-800 p-4 rounded focus:border-green-500 outline-none transition-colors"></textarea>
              <button className="bg-green-600 py-4 font-bold text-black uppercase tracking-widest hover:bg-green-500 transition-all">Transmit Data</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
