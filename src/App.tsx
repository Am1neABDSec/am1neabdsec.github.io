import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // MATRIX DIGITAL RAIN EFFECT
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const letters = "01010101010101010101";
      const fontSize = 14;
      const columns = canvas.width / fontSize;
      const drops: number[] = [];
      for (let i = 0; i < columns; i++) drops[i] = 1;

      const draw = () => {
        if (!ctx) return;
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#22c55e"; 
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
          const text = letters.charAt(Math.floor(Math.random() * letters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
      };
      const interval = setInterval(draw, 33);
      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-green-500 selection:text-black overflow-x-hidden">
      
      {/* GLOBAL FX LAYER */}
      <canvas id="matrix-canvas" className="fixed inset-0 opacity-[0.15] z-0 pointer-events-none"></canvas>
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-green-500/20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
            <span className="text-xl font-black tracking-tighter text-green-500 uppercase italic">AM1NE_SEC</span>
          </div>
          <div className="hidden lg:flex gap-8 text-[10px] tracking-[0.3em] font-bold text-zinc-500 uppercase">
            <a href="#about" className="hover:text-green-400 transition-all">BIOS</a>
            <a href="#services" className="hover:text-green-400 transition-all">SERVICES</a>
            <a href="#experience" className="hover:text-green-400 transition-all">LOGS</a>
            <a href="#education" className="hover:text-green-400 transition-all">INTEL</a>
            <a href="#projects" className="hover:text-green-400 transition-all">PROJECTS</a>
            <a href="#contact" className="hover:text-green-400 transition-all">SIGNAL</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-32 space-y-48">
        
        {/* 1. HERO / ABOUT SECTION */}
        <section id="about" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-1 border border-green-500/30 bg-green-500/10 text-green-500 text-[10px] tracking-widest uppercase rounded-sm font-bold">
              // CLASSIFICATION: OFFENSIVE_OPERATIVE
            </div>
            <h1 className="text-8xl lg:text-[130px] font-black leading-[0.7] tracking-tighter uppercase italic">
              CYBER<br/><span className="text-green-500">STRATEGY.</span>
            </h1>
            <p className="text-zinc-400 text-lg max-w-md border-l-2 border-green-600 pl-8 leading-relaxed italic">
              Mohamed Amine Abdelouafi. Expert en tests d'intrusion, **Active Directory** et audits de sécurité. Fondateur de la CypherCode Académie.
            </p>
            <div className="flex gap-4 pt-6">
              <a href="#contact" className="bg-green-600 text-black px-12 py-5 font-black hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] text-xs uppercase tracking-widest">INITIATE_CONTACT</a>
              <a href="#experience" className="border border-zinc-700 px-12 py-5 font-black hover:border-green-500 transition-all text-xs uppercase tracking-widest">VIEW_HISTORY</a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative border border-zinc-800 bg-zinc-950 p-3 rounded-lg shadow-2xl group">
              <img 
                src="hacker.png" 
                alt="Amine" 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-75 group-hover:brightness-100"
                onError={(e) => { e.currentTarget.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png" }}
              />
              <div className="absolute bottom-6 right-6 bg-black/90 px-4 py-2 border border-green-500/50 text-[9px] text-green-500 tracking-widest font-bold uppercase italic">
                Operative_ID: 001_Casablanca
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section id="services" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter text-green-500 uppercase border-b border-zinc-900 pb-4">02_CAPABILITIES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Pentesting AD", d: "Exploitation avancée : Kerberoasting, SMB Relay, et élévation de privilèges BloodHound." },
              { t: "Audits de Vulnérabilités", d: "Scanning professionnel avec Nessus, validation d'impact et rapports de remédiation." },
              { t: "Sécurisation IoT", d: "Hardening d'équipements intelligents et
