import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // 1. Matrix Digital Rain Animation
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%";
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];
      for (let i = 0; i < columns; i++) drops[i] = 1;

      const draw = () => {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0F0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      };
      const interval = setInterval(draw, 33);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-green-500 selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND LAYER 1: MATRIX RAIN */}
      <canvas id="matrix-canvas" className="fixed inset-0 opacity-[0.15] z-0 pointer-events-none"></canvas>
      
      {/* BACKGROUND LAYER 2: SCANLINES */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* NAV BAR */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-md border-b border-green-500/20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xl font-black tracking-tighter text-green-500 uppercase">AM1NE_ABDS_SEC</span>
          </div>
          <div className="hidden lg:flex gap-10 text-[10px] tracking-[0.4em] font-bold">
            <a href="#about" className="hover:text-green-400 transition-all cursor-pointer">01_BIOS</a>
            <a href="#services" className="hover:text-green-400 transition-all cursor-pointer">02_OPS</a>
            <a href="#experience" className="hover:text-green-400 transition-all cursor-pointer">03_LOGS</a>
            <a href="#education" className="hover:text-green-400 transition-all cursor-pointer">04_INTEL</a>
            <a href="#projects" className="hover:text-green-400 transition-all cursor-pointer">05_PROJECTS</a>
            <a href="#contact" className="hover:text-green-400 transition-all cursor-pointer">06_SIGNAL</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-32 space-y-48">
        
        {/* --- 1. ABOUT / HERO --- */}
        <section id="about" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-pulse">
            <div className="inline-block px-4 py-1 border border-green-500 bg-green-500/10 text-green-500 text-[10px] rounded-sm">
              STATUS: AUTHORIZED_PENTESTER
            </div>
            <h1 className="text-8xl lg:text-[140px] font-black leading-[0.7] tracking-tighter uppercase italic">
              OFFENSIVE<br/><span className="text-green-500">AUDITOR.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md border-l-2 border-green-500 pl-6">
              Mohamed Amine Abdelouafi. Specializing in **Active Directory Exploitation** and infrastructure hardening. I find the gaps before the threat actors do.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-green-600 text-black px-12 py-5 font-black hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)]">INIT_CMD</a>
              <a href="#projects" className="border border-zinc-700 px-12 py-5 font-black hover:border-green-500 transition-all">VIEW_OPS</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-2 bg-green-500/20 blur-2xl rounded-full"></div>
            <div className="relative border-4 border-zinc-900 rounded-lg overflow-hidden group shadow-2xl">
              <img 
                src="hacker.png" 
                alt="Profile" 
                className="w-full h-auto grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                onError={(e) => { e.currentTarget.src = "https://i.imgur.com/8QWv7X7.png" }}
              />
              <div className="absolute bottom-4 left-4 bg-black/90 p-3 border border-green-500/50">
                <p className="text-[8px] text-green-500 tracking-widest">BIOMETRIC_DATA: 100%_MATCH</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. SERVICES --- */}
        <section id="services" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter border-b-4 border-green-500 inline-block pb-2">02_OPERATIONAL_CAPABILITIES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Penetration Testing", d: "Web Apps, Networks, and AD environments." },
              { t: "Vulnerability Assessment", d: "Identifying critical flaws with Nessus & manual audit." },
              { t: "IoT Hardening", d: "Securing smart devices and network gateways." }
            ].map((s, i) => (
              <div key={i} className="p-10 border border-zinc-800 bg-zinc-950/80 hover:border-green-500 transition-all cursor-crosshair group">
                <div className="text-green-500 font-bold mb-4 text-xs font-mono tracking-widest">[0{i+1}]</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{s.t}</h3>
                <p className="text-zinc-500 text-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. EXPERIENCE --- */}
        <section id="experience" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter text-green-500">03_DEPLOYMENT_HISTORY</h2>
          <div className="space-y-12">
            <div className="relative pl-10 border-l border-green-500/30">
              <div className="absolute -left-1 top-0 h-2 w-2 bg-green-500"></div>
              <div className="text-green-500 text-[10px] mb-2 font-bold tracking-widest">OCT 2025 - PRESENT</div>
              <h3 className="text-3xl font-black italic uppercase">Cybersecurity Consultant</h3>
              <p className="text-zinc-500 text-sm mb-4">M-SECURE CONSULTING (Freelance)</p>
              <p className="text-zinc-400 max-w-3xl leading-relaxed">
                Conducting full-scale Active Directory audits, exploiting Kerberos vectors, and delivering technical reports for large-scale logistics and transport clients.
              </p>
            </div>
            <div className="relative pl-10 border-l border-zinc-800">
              <div className="absolute -left-1 top-0 h-2 w-2 bg-zinc-800"></div>
              <div className="text-zinc-500 text-[10px] mb-2 font-bold tracking-widest">MAY 2025 - OCT 2025</div>
              <h3 className="text-3xl font-black italic uppercase text-zinc-400">Tech Support L2</h3>
              <p className="text-zinc-600 text-sm mb-4">TELUS Digital</p>
              <p className="text-zinc-600 max-w-3xl text-sm">Hardening smart devices, managing MAC filtering, and troubleshooting mission-critical IoT security infrastructure.</p>
            </div>
          </div>
        </section>

        {/* --- 4. EDUCATION --- */}
        <section id="education" className="grid lg:grid-cols-2 gap-10">
          <div className="p-12 border border-zinc-900 bg-zinc-950 shadow-[10px_10px_0px_rgba(34,197,94,0.1)]">
            <h2 className="text-3xl font-black mb-10 italic border-l-4 border-green-500 pl-4">ACADEMIC_INTEL</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-bold text-green-500">Licence Professionnelle RSS</h4>
                <p className="text-zinc-500 text-[10px]">AUPS MAROC | 2025-2026</p>
              </div>
              <div className="opacity-40">
                <h4 className="text-lg font-bold">Licence en Gestion</h4>
                <p className="text-zinc-500 text-[10px]">FSJES AIN CHOCK | 2023-2026</p>
              </div>
            </div>
          </div>
          <div className="p-12 border border-zinc-900 bg-green-500 text-black">
            <h2 className="text-3xl font-black mb-10 italic uppercase">Credentials</h2>
            <div className="grid grid-cols-2 gap-4 font-black text-xs uppercase">
              <div className="p-4 border-2 border-black">PJPT</div>
              <div className="p-4 border-2 border-black">SECURITY+</div>
              <div className="p-4 border-2 border-black">FORTINET NSE 3</div>
              <div className="p-4 border-2 border-black">CCNA R&S</div>
            </div>
          </div>
        </section>

        {/* --- 5. PROJECTS --- */}
        <section id="projects" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter">05_MISSION_LOGS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-zinc-800 p-10 hover:bg-green-500 hover:text-black transition-all cursor-pointer group">
              <h3 className="text-3xl font-bold mb-4">Founder: CypherCode Académie</h3>
              <p className="group-hover:text-black text-zinc-500 transition-colors">Leading a team of 10+ pentesters to provide B2B security audits and advanced training.</p>
            </div>
            <div className="border border-zinc-800 p-10 hover:bg-green-500 hover:text-black transition-all cursor-pointer group">
              <h3 className="text-3xl font-bold mb-4">AD_Exploitation_Toolbox</h3>
              <p className="group-hover:text-black text-zinc-500 transition-colors">Custom scripts for automated Kerberoasting and SMB relay attacks.</p>
            </div>
          </div>
        </section>

        {/* --- 6. CONTACT --- */}
        <section id="contact" className="bg-zinc-950 border border-green-500/50 p-12 md:p-24 rounded-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 text-[200px] font-black italic opacity-[0.03] select-none">SIGNAL</div>
          <div className="max-w-3xl mx-auto text-center space-y-12 relative z-10">
            <h2 className="text-7xl font-black italic tracking-tighter uppercase text-green-500">Connect_Now</h2>
            <div className="grid md:grid-cols-2 gap-4 text-xs font-bold tracking-[0.2em] text-zinc-400">
              <div className="p-6 border border-zinc-900 bg-black uppercase">Email: aminetechtalks@gmail.com</div>
              <div className="p-6 border border-zinc-900 bg-black uppercase">Tel: +212 701 10 31 41</div>
            </div>
            <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="SENDER_ID" className="w-full bg-black border border-zinc-800 p-6 focus:border-green-500 transition-all outline-none rounded-none" />
              <textarea rows={5} placeholder="MESSAGE_ENCRYPTED" className="w-full bg-black border border-zinc-800 p-6 focus:border-green-500 transition-all outline-none rounded-none"></textarea>
              <button className="w-full py-8 bg-green-600 text-black font-black uppercase tracking-[0.5em] hover:bg-green-400 transition-all shadow-2xl shadow-green-500/20">INIT_TRANSMISSION</button>
            </form>
          </div>
        </section>

      </main>

      <footer className="py-20 text-center border-t border-zinc-900">
        <p className="text-[10px] text-zinc-700 tracking-[1em] uppercase">© 2026 AMINE_SEC // ALL_SYSTEMS_OPERATIONAL</p>
      </footer>
    </div>
  );
};

export default App;
