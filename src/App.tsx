import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    const counters = document.querySelectorAll('[data-counter-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      let count = 0;
      const updateCount = () => {
        const increment = target / 100;
        if (count < target) {
          count += increment;
          counter.innerHTML = `${Math.ceil(count)}`;
          setTimeout(updateCount, 30);
        } else {
          counter.innerHTML = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-black font-sans overflow-x-hidden">
      {/* GLOBAL MATRIX SCANLINE EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-24">
        
        {/* HERO SECTION - THE PROFESSIONAL IDENTITY */}
        <section className="pt-32 lg:pt-48 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-green-500/30 bg-green-500/5 text-green-500 text-xs font-mono rounded-full animate-pulse">
              [▸] SYSTEM_ACCESS: MOHAMED_AMINE_ABDELOUAFI
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase italic">
              PENTESTER <br/> <span className="text-green-500">& AUDITOR.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-green-900 pl-6">
              Cybersecurity Analyst specializing in <span className="text-white font-bold">Active Directory Exploitation</span>, 
              Vulnerability Assessment, and IoT Hardening. [cite: 1, 41, 45]
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="px-10 py-5 bg-green-600 hover:bg-green-400 text-black font-black uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                INITIATE_CONTACT
              </a>
              <a href="https://github.com/am1neabdsec" className="px-10 py-5 border border-zinc-800 hover:border-green-500 text-white font-bold uppercase tracking-widest transition-all">
                GITHUB_LOGS
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-1000"></div>
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-2 overflow-hidden shadow-2xl">
              <img 
                src="hacker.png" 
                alt="Mohamed Amine" 
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png";
                }}
              />
              <div className="absolute bottom-6 left-6 bg-black/90 backdrop-blur-md px-4 py-2 border border-green-500/50 text-[10px] font-mono text-green-500">
                SUBJECT: AM1NE_ABDS_01 // LOC: CASABLANCA, MOROCCO [cite: 2]
              </div>
            </div>
          </div>
        </section>

        {/* CORE SKILLS - FROM CV */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-16 border-y border-zinc-900">
          {[
            { label: "VULN_ASSESSMENT", val: "100" },
            { label: "AD_EXPLOITATION", val: "85" },
            { label: "NETWORK_CONFIG", val: "95" },
            { label: "IOT_HARDENING", val: "90" }
          ].map((s, i) => (
            <div key={i} className="text-center p-6 bg-zinc-950/50 hover:bg-green-500/5 transition-colors">
              <h2 className="text-4xl font-black text-green-500 font-mono">
                [<span data-counter-target={s.val}>0</span>%]
              </h2>
              <p className="text-[10px] text-zinc-500 tracking-[0.3em] mt-3 uppercase font-bold">{s.label}</p>
            </div>
          ))}
        </section>

        {/* EXPERIENCE TIMELINE - FROM CV */}
        <section id="experience" className="space-y-16">
          <h2 className="text-4xl font-black italic tracking-tighter uppercase border-b border-zinc-800 pb-4">
            Operational_History [cite: 3]
          </h2>
          <div className="space-y-16">
            <div className="relative pl-12 border-l border-green-900">
              <div className="absolute -left-[6px] top-0 h-3 w-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
              <span className="text-green-500 font-mono text-xs uppercase">OCT 2025 - PRESENT [cite: 6]</span>
              <h3 className="text-3xl font-black mt-2 italic">Cybersecurity Consultant (Freelance) </h3>
              <p className="text-zinc-400 text-lg mb-6">M-SECURE CONSULTING </p>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-zinc-500 font-light">
                <li className="flex gap-2">▸ Enumeration & Recon (Nmap, Nessus, Gobuster) [cite: 7]</li>
                <li className="flex gap-2">▸ Active Directory Attacks (Kerberoasting, SMB Relay) [cite: 8]</li>
                <li className="flex gap-2">▸ Strategic Reporting & Risk Prioritization [cite: 11]</li>
              </ul>
            </div>

            <div className="relative pl-12 border-l border-zinc-800">
              <div className="absolute -left-[6px] top-0 h-3 w-3 bg-zinc-700 rounded-full"></div>
              <span className="text-zinc-500 font-mono text-xs uppercase">MAY 2025 - OCT 2025 [cite: 13]</span>
              <h3 className="text-3xl font-black mt-2 italic">Tech Support L2: Smart Home Security </h3>
              <p className="text-zinc-400 text-lg mb-4">TELUS Digital </p>
              <p className="text-sm text-zinc-500 max-w-2xl leading-relaxed">
                Focused on IoT security hardening, advanced Wi-Fi troubleshooting, and operational KPI management via Remedy. [cite: 14, 15, 17]
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & EDUCATION GRID */}
        <section className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-green-500 underline underline-offset-8">
              Verified_Certs [cite: 27]
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "PJPT", org: "TCM Security" },
                { name: "CompTIA Security+", org: "CompTIA" },
                { name: "Fortinet NSE 3", org: "Fortinet" }
              ].map((cert, i) => (
                <div key={i} className="p-6 bg-zinc-950 border border-zinc-900 hover:border-green-500/30 transition-all group">
                  <div className="h-1 w-6 bg-green-500 mb-4 group-hover:w-full transition-all duration-500"></div>
                  <h4 className="text-xl font-bold italic">{cert.name}</h4>
                  <p className="text-zinc-500 text-xs font-mono mt-1">{cert.org}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold uppercase tracking-widest text-white underline underline-offset-8">
              Academic_Training [cite: 39]
            </h2>
            <div className="space-y-8">
              <div className="p-8 bg-zinc-950 border-r-4 border-zinc-900">
                <h4 className="text-xl font-bold italic tracking-tight">Licence Professionnelle RSS [cite: 46]</h4>
                <p className="text-zinc-500 text-sm mt-2 font-mono">AUPS Maroc | 2025-2026 [cite: 46]</p>
              </div>
              <div className="p-8 bg-zinc-950 border-r-4 border-zinc-900 opacity-60">
                <h4 className="text-xl font-bold italic tracking-tight">Bootcamp Cybersécurité [cite: 48]</h4>
                <p className="text-zinc-500 text-sm mt-2 font-mono">GOMYCODE | 2025-2026 [cite: 48]</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES - PROJECT CYPHERCODE */}
        <section className="py-24 bg-zinc-950/50 border border-zinc-900 p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 text-9xl font-black italic select-none">B2B</div>
          <div className="relative z-10 space-y-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black italic uppercase text-green-500 mb-4">Founder: CypherCode Académie [cite: 22]</h2>
              <p className="text-zinc-400 font-light leading-relaxed italic">
                Leading a team of developers and pentesters to provide high-end security training and B2B security audits. [cite: 23, 25]
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {["Security Audits [cite: 25]", "Web Penetration [cite: 25]", "Secure Coding Training [cite: 25]"].map((serv, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-mono tracking-widest text-zinc-300">
                  <span className="h-2 w-2 bg-green-500 rounded-full"></span> {serv}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="py-24 bg-green-600 rounded-[40px] text-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-6xl font-black tracking-tighter italic uppercase mb-6">Transmit_Data</h2>
            <p className="text-black/70 mb-12 font-mono text-sm font-bold tracking-widest uppercase">
              // Request Security Audit // Direct Message //
            </p>
            <form className="space-y-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="AGENT_NAME" className="w-full bg-white/20 border border-black/10 p-6 rounded-2xl outline-none placeholder:text-black/50 font-mono text-sm focus:bg-white/40 transition-all" />
                <input type="email" placeholder="SECURE_EMAIL" className="w-full bg-white/20 border border-black/10 p-6 rounded-2xl outline-none placeholder:text-black/50 font-mono text-sm focus:bg-white/40 transition-all" />
              </div>
              <textarea rows={5} placeholder="MISSION_DESCRIPTION" className="w-full bg-white/20 border border-black/10 p-6 rounded-2xl outline-none placeholder:text-black/50 font-mono text-sm focus:bg-white/40 transition-all resize-none"></textarea>
              <button className="w-full py-6 bg-black text-green-500 font-black uppercase tracking-[0.5em] hover:bg-zinc-900 transition-all shadow-2xl">
                INITIATE_TRANSMISSION
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;
