import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    // Subtle background animation
    const canvas = document.getElementById('bg-dots') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const draw = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "rgba(34, 197, 94, 0.2)";
          for (let i = 0; i < 50; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.fillRect(x, y, 2, 2);
          }
        };
        setInterval(draw, 200);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 font-sans selection:bg-green-500 selection:text-black">
      <canvas id="bg-dots" className="fixed inset-0 pointer-events-none opacity-30"></canvas>

      {/* STICKY NAV */}
      <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
            <span className="font-bold tracking-widest text-sm">AM1NE_SEC</span>
          </div>
          <div className="hidden md:flex gap-8 text-[11px] font-semibold tracking-widest text-zinc-400">
            <a href="#about" className="hover:text-green-500 transition-colors">ABOUT</a>
            <a href="#experience" className="hover:text-green-500 transition-colors">EXPERIENCE</a>
            <a href="#skills" className="hover:text-green-500 transition-colors">SKILLS</a>
            <a href="#contact" className="hover:text-green-500 transition-colors underline underline-offset-8 decoration-green-500">HIRE ME</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section id="about" className="pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="text-green-500 font-mono text-sm tracking-[0.3em] font-bold">PENTESTER & SECURITY AUDITOR</h2>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                MOHAMED AMINE <span className="text-zinc-500">ABDELOUAFI</span>
              </h1>
            </div>
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed font-light">
              Specializing in <span className="text-white font-medium">Active Directory Exploitation</span> and infrastructure hardening. I bridge the gap between complex offensive security and executive-level strategic reporting.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-black px-8 py-4 font-bold text-sm hover:bg-green-500 transition-all rounded-full shadow-xl">WORK WITH ME</a>
              <div className="flex items-center gap-3 px-6 py-4 border border-white/10 rounded-full text-xs font-bold text-zinc-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                AVAILABLE FOR FREELANCE OPS
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-1 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900">
              <img 
                src="hacker.png" 
                alt="Amine Abdelouafi" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
              />
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION - DIRECT FROM CV */}
        <section id="experience" className="py-24 border-t border-white/5 space-y-16">
          <div className="flex items-baseline gap-4">
            <h2 className="text-4xl font-black italic">01_EXPERIENCE</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid gap-12">
            {/* M-SECURE */}
            <div className="group grid md:grid-cols-4 gap-4">
              <div className="text-zinc-500 font-mono text-sm">2025 — PRESENT</div>
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-green-500 transition-colors">Consultant en Cybersécurité @ M-SECURE CONSULTING</h3>
                <p className="text-zinc-400 leading-relaxed italic">
                  Pentesting Active Directory (Kerberoasting, SMB Relay, LLMNR/NBT-NS Poisoning). 
                  Accompagnement de grands acteurs du transport et de la logistique.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-bold tracking-widest text-green-500">
                  <span className="px-3 py-1 border border-green-500/30 rounded-full uppercase">AD_Exploit</span>
                  <span className="px-3 py-1 border border-green-500/30 rounded-full uppercase">Nmap/Nessus</span>
                  <span className="px-3 py-1 border border-green-500/30 rounded-full uppercase">Reporting</span>
                </div>
              </div>
            </div>
            {/* TELUS */}
            <div className="group grid md:grid-cols-4 gap-4 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-zinc-500 font-mono text-sm">MAY — OCT 2025</div>
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-2xl font-bold">Tech Support L2 @ TELUS Digital</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sécurisation IoT (Caméras IP, Serrures connectées) et durcissement des Telus Boosters. 
                  Optimisation de la couverture Wi-Fi pour flux de sécurité critiques.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS GRID */}
        <section id="skills" className="py-24 border-t border-white/5 space-y-16">
          <div className="flex items-baseline gap-4">
            <h2 className="text-4xl font-black italic">02_SKILLS_CORE</h2>
            <div className="h-px flex-1 bg-white/5"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-2xl hover:border-green-500/50 transition-all">
              <h4 className="text-green-500 font-bold mb-4 uppercase tracking-tighter">Offensive</h4>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>• Kerberoasting & SMB Relay</li>
                <li>• BloodHound Privilege Escalation</li>
                <li>• OSINT & Reconnaissance</li>
              </ul>
            </div>
            <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-2xl hover:border-green-500/50 transition-all">
              <h4 className="text-green-500 font-bold mb-4 uppercase tracking-tighter">Defense</h4>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>• Vulnerability Scans (Nessus)</li>
                <li>• IoT Hardening (MAC Filtering)</li>
                <li>• Network Hardening (Cisco)</li>
              </ul>
            </div>
            <div className="p-8 border border-white/5 bg-zinc-900/50 rounded-2xl hover:border-green-500/50 transition-all">
              <h4 className="text-green-500 font-bold mb-4 uppercase tracking-tighter">Academia</h4>
              <ul className="text-zinc-400 space-y-2 text-sm">
                <li>• Licence Pro RSS (AUPS Maroc)</li>
                <li>• PJPT & Security+</li>
                <li>• CypherCode Académie Founder</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT / CALL TO ACTION */}
        <section id="contact" className="py-32">
          <div className="bg-white text-black rounded-[3rem] p-12 md:p-24 text-center space-y-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">Ready to secure?</h2>
            <p className="text-xl max-w-2xl mx-auto font-medium">
              Establish a secure signal for partnerships, audits, or consulting.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:aminetechtalks@gmail.com" className="text-2xl font-black hover:text-green-600 transition-colors">aminetechtalks@gmail.com</a>
              <span className="hidden md:block w-2 h-2 bg-black rounded-full"></span>
              <a href="tel:+212701103141" className="text-2xl font-black hover:text-green-600 transition-colors">+212 701 10 31 41</a>
            </div>
            <div className="pt-10 flex justify-center gap-8 text-xs font-black tracking-[0.3em] opacity-40 uppercase">
              <span>Linkedin</span>
              <span>Github</span>
              <span>Youtube</span>
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-zinc-600 tracking-[1em] font-bold">© 2026 AMINE ABDS // SECURED_BUILD</p>
      </footer>
    </div>
  );
};

export default App;
