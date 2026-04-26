import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [projectFilter, setProjectFilter] = useState("all");

  useEffect(() => {
    // Number Counter Animation
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
      {/* SCANLINE GLOBAL EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-24">
        
        {/* 1. HERO SECTION (THE BIG PICTURE) */}
        <section className="pt-32 lg:pt-48 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fadeIn">
            <div className="inline-flex items-center gap-3 px-4 py-1 border border-green-500/30 bg-green-500/5 text-green-500 text-xs font-mono rounded-full">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              CONNECTION: ENCRYPTED_SECURE_CHANNEL
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none italic uppercase">
              Amine <br/> <span className="text-green-500">SEC_</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg font-light leading-relaxed border-l-2 border-green-900 pl-6">
              Expert in Offensive Security & Red Teaming. Identifying critical infrastructure vulnerabilities before they are exploited.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="px-10 py-5 bg-green-600 hover:bg-green-500 text-black font-black uppercase tracking-widest transition-all transform hover:-translate-y-1">
                Execute Mission
              </a>
              <a href="#projects" className="px-10 py-5 border border-zinc-800 hover:border-green-500 text-white font-bold uppercase tracking-widest transition-all">
                Access Data Logs
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* BIG MAIN IMAGE WITH SMART FALLBACK */}
            <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/40 transition-all duration-1000"></div>
            <div className="relative rounded-2xl border border-white/10 bg-zinc-950 p-3 overflow-hidden shadow-2xl">
              <img 
                src="hacker.png" 
                alt="Main Profile" 
                className="w-full h-auto rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => {
                  const target = e.currentTarget;
                  // If hacker.png fails, try the double extension. If that fails, show the fallback.
                  if (target.src.includes("hacker.png.png")) {
                    target.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png";
                  } else {
                    target.src = "hacker.png.png";
                  }
                }}
              />
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 border border-green-500/50 text-[10px] font-mono text-green-500">
                SUBJECT_ID: AM1NE_ABDS_001
              </div>
            </div>
          </div>
        </section>

        {/* 2. STATS BAR */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-zinc-900 bg-zinc-950/30">
          {[
            { label: "YEARS_EXP", val: "20" },
            { label: "VULNS_PATCHED", val: "300" },
            { label: "CVE_IDENTIFIED", val: "12" },
            { label: "UPTIME_RECORD", val: "100" }
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <h2 className="text-5xl font-black text-white group-hover:text-green-500 transition-colors">
                <span data-counter-target={stat.val}>0</span>{stat.label.includes("UPTIME") ? "%" : "+"}
              </h2>
              <p className="text-[10px] text-zinc-500 tracking-[0.4em] mt-2 font-mono uppercase">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* 3. SERVICES (CORE CAPABILITIES) */}
        <section id="services" className="space-y-16">
          <h2 className="text-5xl font-bold italic border-b border-green-900 pb-4 tracking-tighter">OPERATIONAL_SERVICES</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Penetration Testing", desc: "Advanced simulated attacks on networks and web apps to identify security flaws." },
              { title: "Red Teaming", desc: "Full-scope adversarial attacks targeting people, processes, and technology." },
              { title: "Code Auditing", desc: "Deep static and dynamic analysis of source code to find hidden logic vulnerabilities." }
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-900 bg-zinc-950 hover:border-green-500/50 transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 text-7xl font-black italic">{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4 text-green-500">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. EXPERIENCE & EDUCATION GRID */}
        <section className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold tracking-widest text-green-500 font-mono underline underline-offset-8">EXPERIENCE_LOG</h2>
            <div className="space-y-12">
              <div className="relative pl-8 border-l border-zinc-800">
                <div className="absolute -left-1.5 top-0 h-3 w-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                <span className="text-zinc-500 font-mono text-sm uppercase">2022 - PRESENT</span>
                <h3 className="text-2xl font-bold mt-2">Principal Security Lead</h3>
                <p className="text-zinc-400 mt-1">DefendGlobal Security Operations</p>
                <p className="text-sm text-zinc-500 mt-4 leading-relaxed">Overseeing full-scale offensive security operations for Fortune 500 clients.</p>
              </div>
              <div className="relative pl-8 border-l border-zinc-800">
                <div className="absolute -left-1.5 top-0 h-3 w-3 bg-zinc-700 rounded-full"></div>
                <span className="text-zinc-500 font-mono text-sm uppercase">2018 - 2022</span>
                <h3 className="text-2xl font-bold mt-2">Senior Vulnerability Analyst</h3>
                <p className="text-zinc-400 mt-1">TechGuard Labs</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold tracking-widest text-white font-mono underline underline-offset-8">EDUCATION_FILES</h2>
            <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-xl">
              <h3 className="text-xl font-bold">MSc. in Cyber Security</h3>
              <p className="text-green-500 font-mono text-sm mt-2">Global Tech University (2018)</p>
              <div className="mt-8 pt-8 border-t border-zinc-900">
                <h3 className="text-xl font-bold">BSc. Computer Science</h3>
                <p className="text-green-500 font-mono text-sm mt-2">National Engineering College (2016)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CERTIFICATIONS SECTION */}
        <section className="py-20 bg-zinc-950 border border-zinc-900 p-12 rounded-3xl">
          <h2 className="text-center text-4xl font-black mb-16 tracking-widest uppercase italic">Verified_Credentials</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center font-mono">
            {["OSCP", "OSCE", "CISSP", "CEH Master", "GPEN", "Security+"].map(cert => (
              <div key={cert} className="p-4 border border-zinc-800 bg-black text-xs text-zinc-400 hover:text-green-500 hover:border-green-500 transition-all cursor-crosshair">
                {cert}
              </div>
            ))}
          </div>
        </section>

        {/* 6. PROJECTS (RECENT OPS) */}
        <section id="projects" className="space-y-12">
          <div className="flex justify-between items-end border-b border-zinc-900 pb-6">
            <h2 className="text-5xl font-black italic tracking-tighter uppercase">Recent_Ops</h2>
            <div className="hidden md:flex gap-6 font-mono text-xs text-zinc-500">
              <button onClick={() => setProjectFilter("all")} className={projectFilter === "all" ? "text-green-500" : ""}>ALL_LOGS</button>
              <button onClick={() => setProjectFilter("web")} className={projectFilter === "web" ? "text-green-500" : ""}>WEB_PENTEST</button>
              <button onClick={() => setProjectFilter("network")} className={projectFilter === "network" ? "text-green-500" : ""}>NETWORK_OPS</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {[
               { id: 1, title: "Operation Nightfall", category: "web", desc: "Successful penetration of a banking gateway API, identifying 4 critical path vulnerabilities." },
               { id: 2, title: "Ghost Protocol", category: "network", desc: "Simulation of a state-sponsored lateral movement attack inside a private cloud." },
               { id: 3, title: "Zero Day Hunt", category: "web", desc: "Finding and patching a critical RCE vulnerability in an open-source CMS." }
             ].filter(p => projectFilter === "all" || p.category === projectFilter).map(p => (
               <div key={p.id} className="group cursor-pointer relative bg-zinc-950 border border-zinc-900 p-8 hover:bg-zinc-900 transition-all">
                  <div className="text-xs text-green-900 mb-4 font-mono">PROJECT_00{p.id}</div>
                  <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-8">{p.desc}</p>
                  <div className="text-green-500 font-mono text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">VIEW_DECRYPTED_DATA ➔</div>
               </div>
             ))}
          </div>
        </section>

        {/* 7. CONTACT FORM (TRANSMIT DATA) */}
        <section id="contact" className="py-24 border border-green-500/20 bg-zinc-950 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-[15rem] font-black italic select-none">DATA</div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-6xl font-black mb-6 tracking-tighter italic uppercase underline decoration-green-600 underline-offset-8">Transmit_Message</h2>
            <p className="text-zinc-400 mb-16 font-mono text-sm">Submit your query via this encrypted interface for rapid response.</p>
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <input type="text" placeholder="SENDER_NAME" className="w-full bg-black border border-zinc-800 p-6 rounded-2xl outline-none focus:border-green-500 transition-all font-mono text-sm" />
                <input type="email" placeholder="SECURE_EMAIL" className="w-full bg-black border border-zinc-800 p-6 rounded-2xl outline-none focus:border-green-500 transition-all font-mono text-sm" />
              </div>
              <textarea rows={6} placeholder="MISSION_DESCRIPTION" className="w-full bg-black border border-zinc-800 p-6 rounded-2xl outline-none focus:border-green-500 transition-all font-mono text-sm resize-none"></textarea>
              <button className="w-full py-6 bg-green-600 text-black font-black uppercase tracking-[0.5em] hover:bg-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all">
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
