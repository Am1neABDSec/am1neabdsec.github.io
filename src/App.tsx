import React, { useEffect } from "react";

const App: React.FC = () => {
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
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500 selection:text-black">
      {/* AUTHENTICATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/5 px-8 py-5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
            <span className="font-black tracking-[0.2em] text-xl uppercase italic">
              AM1NE<span className="text-green-500">_SEC</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10 text-[10px] font-mono tracking-[0.3em] text-zinc-500">
            <a href="#exp" className="hover:text-green-500 transition-all">01_EXPERIENCE</a>
            <a href="#certs" className="hover:text-green-500 transition-all">02_CREDENTIALS</a>
            <a href="#contact" className="hover:text-green-500 transition-all">03_CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 space-y-40 pb-32">
        
        {/* HERO SECTION */}
        <section className="pt-48 lg:pt-60 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl md:text-[110px] font-black tracking-tighter leading-[0.8] uppercase italic">
              OFFENSIVE <br/> <span className="text-green-500">MINDSET.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg font-light leading-relaxed border-l-2 border-green-600 pl-8">
              Cybersecurity Analyst & Pentester. Specialist in **Active Directory Exploitation** and **IoT Hardening**. Bridging the gap between code and security.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-block px-12 py-6 bg-green-600 hover:bg-green-400 text-black font-black uppercase tracking-widest transition-all shadow-[0_20px_50px_rgba(34,197,94,0.2)]">
                INITIATE_CONTACT
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-green-500/10 rounded-full blur-[120px]"></div>
            <div className="relative border border-white/10 bg-zinc-950 p-2 rounded-2xl overflow-hidden shadow-2xl">
              {/* THE IMAGE FIX: We use a simple path. Ensure file is named hacker.png in public folder */}
              <img 
                src="hacker.png" 
                alt="Amine" 
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000"
                onError={(e) => { e.currentTarget.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png" }}
              />
            </div>
          </div>
        </section>

        {/* STATS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-16 border-y border-zinc-900 bg-zinc-950/40">
          {[
            { label: "VULNS_FOUND", val: "300" },
            { label: "PENTESTS", val: "150" },
            { label: "YEARS_EXP", val: "20" },
            { label: "SUCCESS", val: "100" }
          ].map((s, i) => (
            <div key={i} className="text-center p-4">
              <h2 className="text-5xl font-black text-green-500 font-mono italic">
                <span data-counter-target={s.val}>0</span>{s.label === "SUCCESS" ? "%" : "+"}
              </h2>
              <p className="text-[10px] text-zinc-500 tracking-[0.3em] mt-2 uppercase">{s.label}</p>
            </div>
          ))}
        </section>

        {/* EXPERIENCE - DATA FROM CV */}
        <section id="exp" className="space-y-16">
          <h2 className="text-4xl font-black italic tracking-tighter uppercase border-b border-zinc-800 pb-4 text-green-500">Operational_Logs</h2>
          <div className="space-y-12">
            <div className="group p-10 bg-zinc-950 border border-zinc-900 hover:border-green-500/50 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-black italic uppercase">Consultant en Cybersecurité</h3>
                  <p className="text-green-500 font-mono text-sm tracking-widest mt-1">M-SECURE CONSULTING | OCT 2025 - PRESENT</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400 font-mono italic">
                <li>▸ Active Directory Attacks (Kerberoasting)</li>
                <li>▸ Vulnerability Assessment & Reporting</li>
                <li>▸ Infrastructure Mapping (Nmap, Nessus)</li>
                <li>▸ IoT Device Hardening</li>
              </ul>
            </div>

            <div className="group p-10 bg-zinc-950 border border-zinc-900 hover:border-white/20 transition-all">
              <h3 className="text-3xl font-black italic uppercase text-zinc-300">Tech Support L2</h3>
              <p className="text-zinc-500 font-mono text-sm tracking-widest mt-1 uppercase">TELUS Digital | MAY 2025 - OCT 2025</p>
              <p className="mt-4 text-zinc-500 max-w-3xl text-sm italic">
                Advanced troubleshooting for smart home security systems, IP cameras, and network infrastructure stabilization.
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & ACADEMICS */}
        <section id="certs" className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h2 className="text-3xl font-black uppercase text-green-500 tracking-tighter">Verified_Certs</h2>
            <div className="space-y-4">
              {["PJPT (TCM Security)", "CompTIA Security+", "Fortinet NSE 3"].map((cert, i) => (
                <div key={i} className="p-6 bg-zinc-950 border border-zinc-900 flex justify-between items-center group hover:bg-zinc-900 transition-all">
                  <span className="font-bold italic text-lg">{cert}</span>
                  <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">VALIDATED</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-3xl font-black uppercase text-white tracking-tighter">Education</h2>
            <div className="p-8 bg-zinc-950 border-r-4 border-green-600">
              <h4 className="text-xl font-bold italic">Licence Professionnelle RSS</h4>
              <p className="text-zinc-500 text-sm mt-2 font-mono uppercase tracking-widest">AUPS Maroc | 2025-2026</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 bg-green-600 rounded-2xl text-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-6">TRANSMIT_DATA</h2>
            <p className="text-black/70 mb-12 font-mono text-xs font-bold uppercase tracking-widest">
              aminetechtalks@gmail.com // +212 701 10 31 41
            </p>
            <form className="grid gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="SENDER_ID" className="w-full bg-white/10 border border-black/10 p-5 rounded-xl outline-none placeholder:text-black/40 font-mono text-sm" />
                <input type="email" placeholder="SECURE_EMAIL" className="w-full bg-white/10 border border-black/10 p-5 rounded-xl outline-none placeholder:text-black/40 font-mono text-sm" />
              </div>
              <textarea rows={4} placeholder="MISSION_DESCRIPTION" className="w-full bg-white/10 border border-black/10 p-5 rounded-xl outline-none placeholder:text-black/40 font-mono text-sm resize-none"></textarea>
              <button className="w-full py-6 bg-black text-green-500 font-black uppercase tracking-[0.4em] hover:bg-zinc-900 transition-all shadow-2xl">
                SEND_ENCRYPTED_SIGNAL
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-20 border-t border-zinc-900 text-center">
        <p className="text-zinc-600 text-[10px] font-mono tracking-[0.5em] uppercase">
          © 2026 MOHAMED AMINE ABDELOUAFI // SECURITY ANALYST
        </p>
      </footer>
    </div>
  );
};

export default App;
