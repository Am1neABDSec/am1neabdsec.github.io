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

  const projects = [
    { title: "Network Infiltration Scan", category: "pentest", desc: "Automated vulnerability assessment tool for enterprise networks." },
    { title: "CryptoGuard Sentinel", category: "defense", desc: "End-to-end encryption layer for real-time database communication." },
    { title: "Zero-Day Exploit Research", category: "research", desc: "Deep-dive analysis into kernel-level vulnerabilities." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-green-500 selection:text-black">
      {/* SCANLINE OVERLAY EFFECT */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      <Nav />
      
      <main className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-24 lg:pt-40 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 border border-green-500/50 bg-green-500/10 text-green-400 text-xs animate-pulse rounded-full">
              ▸ SYSTEM_STATUS: AUTHORIZED_ACCESS_GRANTED
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
              AM1NE<br/><span className="text-green-500">_SEC.</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
              Specializing in <span className="text-white border-b border-green-500">Offensive Security</span>, 
              Red Teaming, and advanced digital forensics. I bridge the gap between vulnerability and total system hardening.
            </p>
            <div className="flex gap-6">
              <button className="bg-green-600 px-10 py-4 text-black font-bold hover:bg-green-400 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                INITIATE_CONTACT
              </button>
              <button className="border border-zinc-700 px-10 py-4 font-bold hover:border-green-500 transition-all">
                DOWNLOAD_CV.PDF
              </button>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-green-500/10 blur-3xl rounded-full"></div>
            <div className="relative border-2 border-zinc-800 p-2 bg-black rounded-2xl overflow-hidden">
               <img 
                 src="/hacker.png" 
                 alt="Mohamed Amine" 
                 className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 object-cover"
                 onError={(e) => { e.currentTarget.src = "/hacker.png.png" }}
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
                  <div className="text-xs text-green-500 mb-1">BIOMETRIC_ID</div>
                  <div className="text-lg font-bold tracking-widest">AMINE_ABDELOUAFI</div>
               </div>
            </div>
          </div>
        </section>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10 border-y border-zinc-900">
          {[
            { label: "EXP_YEARS", val: "20" },
            { label: "CRITICAL_VULNS", val: "300" },
            { label: "BOUNTIES_CAPTURED", val: "85" },
            { label: "UPTIME", val: "99" }
          ].map((s, i) => (
            <div key={i} className="p-6 bg-zinc-950/50">
              <div className="text-4xl font-bold text-green-500 mb-2 font-mono">
                [<span data-counter-target={s.val}>0</span>{s.label === "UPTIME" ? "%" : "+"}]
              </div>
              <div className="text-[10px] text-zinc-500 tracking-[0.3em]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* --- SERVICES / CORE TECH --- */}
        <section id="services" className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold uppercase tracking-widest text-green-500">Operational_Capabilities</h2>
            <div className="h-1 w-24 bg-green-900 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Penetration Testing", icon: "01", desc: "Full-spectrum network and web application attacks." },
              { title: "Incident Response", icon: "02", desc: "Rapid mitigation and forensic cleanup after breaches." },
              { title: "Cloud Security", icon: "03", desc: "Hardening AWS/Azure/GCP environments against leaks." }
            ].map((serv, i) => (
              <div key={i} className="p-8 border border-zinc-800 bg-zinc-950 hover:bg-zinc-900 transition-all group">
                <div className="text-green-800 text-6xl font-black mb-6 group-hover:text-green-500 transition-colors">{serv.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{serv.title}</h3>
                <p className="text-zinc-500 leading-relaxed">{serv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE & EDUCATION --- */}
        <section className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold border-l-4 border-green-500 pl-6 uppercase tracking-tighter">Experience_Log</h2>
            <div className="space-y-10">
              <div className="group relative pl-8">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[1px] bg-zinc-800 group-hover:bg-green-500 transition-all"></div>
                <div className="text-green-500 text-sm mb-2 tracking-widest">2022 - PRESENT</div>
                <h3 className="text-xl font-bold">Principal Security Architect</h3>
                <p className="text-zinc-500">CyberForce Defense Systems</p>
              </div>
              <div className="group relative pl-8">
                <div className="absolute left-[-2px] top-0 bottom-0 w-[1px] bg-zinc-800 group-hover:bg-green-500 transition-all"></div>
                <div className="text-green-500 text-sm mb-2 tracking-widest">2018 - 2022</div>
                <h3 className="text-xl font-bold">Senior Red Teamer</h3>
                <p className="text-zinc-500">Global Financial Security Group</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold border-l-4 border-white pl-6 uppercase tracking-tighter">Academic_Training</h2>
            <div className="space-y-10">
              <div className="p-6 bg-zinc-950 border-r-4 border-zinc-800">
                <h3 className="text-xl font-bold">MSc in Cybersecurity</h3>
                <p className="text-zinc-500 font-mono mt-2">University of Information Technology</p>
              </div>
              <div className="p-6 bg-zinc-950 border-r-4 border-zinc-800">
                <h3 className="text-xl font-bold">BSc Computer Science</h3>
                <p className="text-zinc-500 font-mono mt-2">National Engineering Institute</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects" className="space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Recent_Ops</h2>
            <div className="space-x-4">
              {['all', 'pentest', 'defense'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`text-xs uppercase tracking-widest ${activeTab === cat ? 'text-green-500' : 'text-zinc-600 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.filter(p => activeTab === 'all' || p.category === activeTab).map((p, i) => (
              <div key={i} className="relative group overflow-hidden border border-zinc-800 aspect-square flex flex-col justify-end p-8 bg-zinc-950">
                <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-all"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">{p.title}</h3>
                <p className="text-zinc-500 text-sm mb-6 relative z-10 leading-relaxed">{p.desc}</p>
                <button className="text-xs font-bold text-green-500 tracking-widest relative z-10 group-hover:translate-x-2 transition-transform">VIEW_PROJECT_DATA ↗</button>
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-24 border border-zinc-900 bg-zinc-950/50 rounded-3xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-black text-9xl select-none">CONTACT</div>
          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-5xl font-bold mb-8 italic text-green-500 tracking-tighter">SECURE_COMMUNICATION</h2>
            <p className="text-zinc-400 mb-12 text-lg">Hiring for high-stakes security audits? Transmit your details via the encrypted channel below.</p>
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 tracking-widest ml-2">SENDER_ID</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 p-5 focus:border-green-500 outline-none transition-all rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 tracking-widest ml-2">RETURN_SIGNAL_EMAIL</label>
                  <input type="email" className="w-full bg-black border border-zinc-800 p-5 focus:border-green-500 outline-none transition-all rounded-xl" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 tracking-widest ml-2">MESSAGE_ENCRYPTED_TEXT</label>
                <textarea rows={5} className="w-full bg-black border border-zinc-800 p-5 focus:border-green-500 outline-none transition-all rounded-xl resize-none"></textarea>
              </div>
              <button className="w-full py-6 bg-green-600 text-black font-black uppercase tracking-[0.3em] hover:bg-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all">
                TRANSMIT_DATA
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
