import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const letters = "01010101010101010101";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) drops[i] = 1;

        const draw = () => {
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
        return () => clearInterval(interval);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono selection:bg-green-500 selection:text-black overflow-x-hidden">
      {/* FX LAYERS */}
      <canvas id="matrix-canvas" className="fixed inset-0 opacity-[0.15] z-0 pointer-events-none"></canvas>
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-md border-b border-green-500/20 px-8 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-ping shadow-[0_0_10px_#22c55e]"></div>
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
        {/* 1. BIOS (ABOUT) */}
        <section id="about" className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block px-4 py-1 border border-green-500/30 bg-green-500/10 text-green-500 text-[10px] tracking-widest uppercase rounded-sm font-bold">// STATUS: OFFENSIVE_ACTIVE</div>
            <h1 className="text-8xl lg:text-[130px] font-black leading-[0.7] tracking-tighter uppercase italic">CYBER<br/><span className="text-green-500">STRATEGY.</span></h1>
            <p className="text-zinc-400 text-lg max-w-md border-l-2 border-green-600 pl-8 leading-relaxed italic">Mohamed Amine Abdelouafi. Pentester spécialisé en Active Directory et fondateur de CypherCode Académie.</p>
            <div className="flex gap-4 pt-6">
              <a href="#contact" className="bg-green-600 text-black px-12 py-5 font-black hover:bg-green-400 transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] text-xs uppercase tracking-widest">INIT_CONTACT</a>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-10 bg-green-500/10 blur-[100px] rounded-full"></div>
            <div className="relative border border-zinc-800 bg-zinc-950 p-3 rounded-lg shadow-2xl">
              <img src="hacker.png" alt="Amine" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000" onError={(e) => { e.currentTarget.src = "https://img.icons8.com/ios-filled/500/22c55e/security-checked.png" }} />
              <div className="absolute bottom-6 right-6 bg-black/90 px-4 py-2 border border-green-500/50 text-[9px] text-green-500 tracking-widest font-bold uppercase italic">Operative_ID: AM1NE_SEC</div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES */}
        <section id="services" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter text-green-500 uppercase border-b border-zinc-900 pb-4">02_CAPABILITIES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 border border-zinc-900 bg-zinc-950/50 hover:border-green-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 uppercase italic">Pentesting AD</h3>
              <p className="text-zinc-500 text-sm font-light">Exploitation Kerberos, SMB Relay et élévation de privilèges BloodHound.</p>
            </div>
            <div className="p-10 border border-zinc-900 bg-zinc-950/50 hover:border-green-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 uppercase italic">Audits Vulns</h3>
              <p className="text-zinc-500 text-sm font-light">Validation d'impact critique avec rapports stratégiques pour top management.</p>
            </div>
            <div className="p-10 border border-zinc-900 bg-zinc-950/50 hover:border-green-500 transition-all">
              <h3 className="text-2xl font-bold mb-4 uppercase italic">IoT Hardening</h3>
              <p className="text-zinc-500 text-sm font-light">Sécurisation d'équipements intelligents et optimisation des flux réseau.</p>
            </div>
          </div>
        </section>

        {/* 3. LOGS (EXPERIENCE) */}
        <section id="experience" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase border-b border-zinc-900 pb-4 text-green-500">03_DEPLOYMENT_LOGS</h2>
          <div className="space-y-20">
            <div className="relative pl-12 border-l-2 border-green-500">
              <div className="absolute -left-[9px] top-0 h-4 w-4 bg-green-500 shadow-[0_0_20px_#22c55e]"></div>
              <span className="text-green-500 text-[10px] tracking-[0.3em] font-bold uppercase">2025 - PRESENT</span>
              <h3 className="text-4xl font-black italic uppercase mt-3">Consultant Cybersécurité</h3>
              <p className="text-zinc-400 text-lg mb-6 uppercase tracking-tighter">M-SECURE CONSULTING (Freelance)</p>
              <p className="text-zinc-500 text-sm italic">Accompagnement d'acteurs de la logistique dans l'audit de leurs environnements AD et cloud.</p>
            </div>
            <div className="relative pl-12 border-l-2 border-zinc-800">
              <div className="absolute -left-[9px] top-0 h-4 w-4 bg-zinc-800"></div>
              <span className="text-zinc-600 text-[10px] tracking-[0.3em] font-bold uppercase">MAY - OCT 2025</span>
              <h3 className="text-4xl font-black italic uppercase mt-3 text-zinc-500">Tech Support L2</h3>
              <p className="text-zinc-600 text-lg mb-4 uppercase italic">TELUS Digital</p>
              <p className="text-zinc-500 text-sm italic">Hardening de dispositifs de sécurité IoT et troubleshooting infrastructure réseau.</p>
            </div>
          </div>
        </section>

        {/* 4. INTEL (EDUCATION) */}
        <section id="education" className="grid lg:grid-cols-2 gap-10">
          <div className="p-10 border border-zinc-900 bg-zinc-950/80">
            <h2 className="text-3xl font-black mb-10 italic uppercase border-l-4 border-green-500 pl-4">Intel_Academic</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-green-500 uppercase">Licence Pro RSS</h4>
                <p className="text-zinc-500 text-[10px] font-bold uppercase mt-1">AUPS MAROC | 2025-2026</p>
              </div>
              <div className="opacity-40">
                <h4 className="text-xl font-bold text-zinc-300 uppercase">Licence Gestion</h4>
                <p className="text-zinc-500 text-[10px] font-bold uppercase mt-1">FSJES AIN CHOCK | 2023-2026</p>
              </div>
            </div>
          </div>
          <div className="p-10 border border-zinc-900 bg-green-600 text-black">
            <h2 className="text-3xl font-black mb-10 italic uppercase tracking-tighter">Credentials</h2>
            <div className="grid grid-cols-2 gap-4 font-black text-[10px] uppercase">
              <div className="p-5 border-2 border-black/20 bg-white/10">PJPT (TCM)</div>
              <div className="p-5 border-2 border-black/20 bg-white/10">SECURITY+</div>
              <div className="p-5 border-2 border-black/20 bg-white/10">NSE 3 FORTINET</div>
              <div className="p-5 border-2 border-black/20 bg-white/10">CCNA R&S</div>
            </div>
          </div>
        </section>

        {/* 5. PROJECTS */}
        <section id="projects" className="space-y-16">
          <h2 className="text-5xl font-black italic tracking-tighter uppercase border-b border-zinc-900 pb-4">05_ACTIVE_MISSIONS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-12 bg-zinc-950 border border-zinc-800 hover:border-green-500 transition-all">
              <h3 className="text-3xl font-black mb-4 uppercase italic">CypherCode Académie</h3>
              <p className="text-zinc-500 text-sm font-light italic">Branding et développement d'une communauté d'experts en sécurité offensive.</p>
            </div>
            <div className="p-12 bg-zinc-950 border border-zinc-800 hover:border-green-500 transition-all">
              <h3 className="text-3xl font-black mb-4 uppercase italic">AD_Attack_Toolkit</h3>
              <p className="text-zinc-500 text-sm font-light italic">Scripts d'énumération et d'exploitation automatisée des vecteurs Kerberos.</p>
            </div>
          </div>
        </section>

        {/* 6. SIGNAL (CONTACT) */}
        <section id="contact" className="bg-zinc-950 border-2 border-green-500/20 p-12 md:p-24 rounded-lg relative overflow-hidden text-center">
          <h2 className="text-7xl font-black italic tracking-tighter uppercase text-green-500">Establish_Signal</h2>
          <div className="grid md:grid-cols-2 gap-6 text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mt-12">
            <div className="p-6 border border-zinc-900 bg-black">aminetechtalks@gmail.com</div>
            <div className="p-6 border border-zinc-900 bg-black">+212 701 10 31 41</div>
          </div>
          <form className="mt-12 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="SENDER_ID" className="w-full bg-black border border-zinc-800 p-6 focus:border-green-500 transition-all outline-none font-mono text-sm uppercase" />
            <textarea rows={4} placeholder="ENCRYPTED_MESSAGE" className="w-full bg-black border border-zinc-800 p-6 focus:border-green-500 transition-all outline-none font-mono text-sm resize-none uppercase"></textarea>
            <button className="w-full py-8 bg-green-600 text-black font-black uppercase tracking-[0.6em] hover:bg-green-400 transition-all shadow-2xl">INIT_TRANSMISSION</button>
          </form>
        </section>
      </main>

      <footer className="py-20 text-center border-t border-zinc-900 bg-black">
        <p className="text-[9px] text-zinc-800 tracking-[1.5em] uppercase font-black">© 2026 MOHAMED AMINE ABDELOUAFI // STATUS: SECURE</p>
      </footer>
    </div>
  );
};

export default App;
