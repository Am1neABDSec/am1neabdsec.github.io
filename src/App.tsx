import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // High-performance counter logic
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
    <div className="min-h-screen bg-black text-white font-sans selection:bg-green-500 selection:text-black overflow-x-hidden">
      {/* SCANLINE EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5 px-6 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="font-black tracking-tighter text-2xl uppercase italic">
            Amine<span className="text-green-500">_Sec</span>
          </span>
          <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.3em] text-zinc-500">
            <a href="#about" className="hover:text-green-500 transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-green-500 transition-colors">EXPERIENCE</a>
            <a href="#credentials" className="hover:text-green-500 transition-colors">CREDENTIALS</a>
            <a href="#contact" className="hover:text-green-500 transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 space-y-40 pb-32">
        
        {/* HERO SECTION */}
        <section id="about" className="pt-48 lg:pt-64 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-green-500/30 bg-green-500/5 text-green-500 text-[10px] font-mono rounded-full uppercase tracking-widest">
              ▸ ANALYSTE CYBERSÉCURITÉ | PENTESTER | AUDITEUR SI [cite: 1]
            </div>
            <h1 className="text-7xl md:text-[120px] font-black tracking-tighter leading-[0.75] uppercase italic">
              SECURE <br/> <span className="text-green-500">INTEL.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg font-light leading-relaxed border-l-2 border-green-900 pl-8">
              Expertise in **Active Directory Exploitation** and **Vulnerability Assessment**. [cite: 41, 43] Founder of **CypherCode Academy**, training elite security operatives. [cite: 22]
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#contact" className="px-12 py-6 bg-green-600 hover:bg-green-400 text-black font-black uppercase tracking-widest transition-all shadow-2xl">
                INITIATE_MISSION
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-green-500/10 rounded-full blur-[120px]"></div>
            <div className="relative rounded-3xl border border-white/10 bg-zinc-950 p-3 overflow-hidden group shadow-2xl">
              <img 
                src="hacker.png" 
                alt="Amine Abdelouafi" 
                className="w-full h-auto rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover"
                onError={(e) => { e.currentTarget.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png" }}
              />
              <div className="absolute top-8 left-8 bg-black/80 backdrop-blur-xl px-4 py-2 border border-green-500/50 text-[10px] font-mono text-green-500 uppercase tracking-widest">
                ID: AM1NE_ABDS_001 // {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-20 border-y border-zinc-900 bg-zinc-950/20">
          {[
            { label: "EXP_YEARS", val: "20" },
            { label: "VULNS_IDENTIFIED", val: "300" },
            { label: "PENTESTS_DONE", val: "150" },
            { label: "SUCCESS_RATE", val: "100" }
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <h2 className="text-5xl md:text-7xl font-black text-white group-hover:text-green-500 transition-colors">
                <span data-counter-target={s.val}>0</span>{s.label === "SUCCESS_RATE" ? "%" : "+"}
              </h2>
              <p className="text-[10px] text-zinc-500 tracking-[0.4em] mt-3 uppercase font-bold">{s.label}</p>
            </div>
          ))}
        </section>

        {/* EXPERIENCE - FROM CV */}
        <section id="experience" className="space-y-20">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase border-b border-zinc-800 pb-6 text-green-500">Operational_Logs</h2>
          <div className="space-y-24">
            <div className="relative pl-12 border-l border-green-900">
              <div className="absolute -left-[6.5px] top-0 h-3 w-3 bg-green-500 rounded-full shadow-[0_0_15px_#22c55e]"></div>
              <span className="text-green-500 font-mono text-xs uppercase tracking-widest">Oct 2025 - Présent [cite: 6]</span>
              <h3 className="text-4xl font-black mt-3 italic uppercase">Consultant en Cybersecurité</h3>
              <p className="text-zinc-400 text-xl mb-8 uppercase tracking-tighter">M-SECURE CONSULTING [cite: 4]</p>
              <ul className="grid md:grid-cols-2 gap-6 text-sm text-zinc-500 font-mono italic">
                <li className="flex items-start gap-3">
                  <span className="text-green-500">▸</span> Énumération & Reconnaissance (Nmap, Nessus, Gobuster) [cite: 7]
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">▸</span> Active Directory Exploitation (Kerberoasting, SMB Relay) [cite: 8]
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">▸</span> Vulnerability Assessment & Impact Demonstration [cite: 9]
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500">▸</span> Rédaction de rapports stratégiques [cite: 11]
                </li>
              </ul>
            </div>

            <div className="relative pl-12 border-l border-zinc-800">
              <div className="absolute -left-[6.5px] top-0 h-3 w-3 bg-zinc-700 rounded-full"></div>
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-widest">Mai 2025 - Oct 2025 [cite: 13]</span>
              <h3 className="text-4xl font-black mt-3 italic uppercase text-zinc-300">Tech Support L2</h3>
              <p className="text-zinc-500 text-xl mb-4">TELUS Digital [cite: 12]</p>
              <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed italic">
                Sécurisation IoT, configuration de dispositifs intelligents (caméras IP, serrures connectées) et troubleshooting réseau avancé. [cite: 14, 15]
              </p>
            </div>
          </div>
        </section>

        {/* CREDENTIALS - FROM CV */}
        <section id="credentials" className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase text-green-500 tracking-widest border-l-4 border-green-500 pl-6">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { n: "PJPT", o: "TCM Security" },
                { n: "CompTIA Security+", o: "CompTIA" },
                { n: "Fortinet NSE 3", o: "Fortinet" }
              ].map((c, i) => (
                <div key={i} className="p-8 bg-zinc-950 border border-zinc-900 hover:border-green-500/40 transition-all group">
                  <h4 className="text-2xl font-black italic group-hover:text-green-500 transition-colors">{c.n}</h4>
                  <p className="text-zinc-500 text-[10px] font-mono mt-2 uppercase tracking-widest">{c.o}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-12">
            <h2 className="text-3xl font-black uppercase text-white tracking-widest border-l-4 border-white pl-6">Education</h2>
            <div className="space-y-8">
              <div className="p-8 bg-zinc-950 border-r-4 border-green-500">
                <h4 className="text-xl font-bold uppercase italic">Licence Professionnelle RSS</h4>
                <p className="text-zinc-500 text-xs font-mono mt-3 uppercase tracking-widest">AUPS Maroc | 2025 - 2026 [cite: 46]</p>
              </div>
              <div className="p-8 bg-zinc-950 border-r-4 border-zinc-800 opacity-50">
                <h4 className="text-xl font-bold uppercase italic italic">Licence en gestion</h4>
                <p className="text-zinc-500 text-xs font-mono mt-3 uppercase tracking-widest">FSJES Ain Chock | 2023 - 2026 [cite: 47]</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 bg-green-600 rounded-[50px] text-black overflow-hidden relative shadow-[0_0_50px_rgba(34,197,94,0.4)]">
          <div className="absolute top-0 right-0 p-12 opacity-10 text-[200px] font-black italic select-none pointer-events-none">DATA</div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase mb-8">CONTACT_ME</h2>
            <div className="grid md:grid-cols-2 gap-10 mb-16 text-left font-mono font-bold uppercase text-xs tracking-widest">
               <div className="p-6 border-2 border-black/10 rounded-3xl">
                  EMAIL: aminetechtalks@gmail.com [cite: 1]
               </div>
               <div className="p-6 border-2 border-black/10 rounded-3xl">
                  TEL: +212 701 10 31 41 [cite: 2]
               </div>
            </div>
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="SUBJECT_ID" className="w-full bg-black/5 border-2 border-black/10 p-6 rounded-3xl outline-none placeholder:text-black/40 font-mono text-sm focus:bg-white/20 transition-all" />
                <input type="email" placeholder="SECURE_EMAIL" className="w-full bg-black/5 border-2 border-black/10 p-6 rounded-3xl outline-none placeholder:text-black/40 font-mono text-sm focus:bg-white/20 transition-all" />
              </div>
              <textarea rows={5} placeholder="MISSION_DESCRIPTION" className="w-full bg-black/5 border-2 border-black/10 p-6 rounded-3xl outline-none placeholder:text-black/40 font-mono text-sm focus:bg-white/20 transition-all resize-none"></textarea>
              <button className="w-full py-8 bg-black text-green-500 font-black uppercase tracking-[0.5em] hover:scale-[1.02] active:scale-95 transition-all shadow-2xl">
                TRANSMIT_SIGNAL
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="py-20 border-t border-zinc-900 text-center bg-zinc-950">
        <p className="text-zinc-600 text-[10px] font-mono tracking-[0.5em] uppercase">
          © {new Date().getFullYear()} MOHAMED AMINE ABDELOUAFI // AM1NEABDSec [cite: 1]
        </p>
      </footer>
    </div>
  );
};

export default App;
