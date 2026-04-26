import React, { useEffect } from "react";

// Temporarily commenting these out to find the missing file error
// import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import "/assets/css/particles.css"; 

const App: React.FC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-counter-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      let count = 0;
      const updateCount = () => {
        const increment = target / 50;
        if (count < target) {
          count += increment;
          counter.innerHTML = `${Math.ceil(count)}`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerHTML = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* SIMPLE NAV */}
      <nav style={{ padding: '20px', borderBottom: '1px solid #222' }}>
        <h2 style={{ color: '#22c55e' }}>AMINE_SEC_PORTFOLIO</h2>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '50px 20px' }}>
        <section>
          <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>
            Secure Your Future with <span style={{ color: '#22c55e' }}>Ethical Hacking</span>
          </h1>
          <p style={{ fontSize: '1.5rem', color: '#aaa', maxWidth: '700px' }}>
            Advanced penetration testing and proactive threat monitoring.
          </p>
        </section>

        <section style={{ marginTop: '100px', display: 'flex', gap: '50px', textAlign: 'center' }}>
          <div>
            <h2 style={{ fontSize: '3rem', margin: '0' }}><span data-counter-target="20">0</span>+</h2>
            <p style={{ color: '#777' }}>Years Experience</p>
          </div>
          <div>
            <h2 style={{ fontSize: '3rem', margin: '0' }}><span data-counter-target="300">0</span>+</h2>
            <p style={{ color: '#777' }}>Engagements</p>
          </div>
        </section>
      </main>

      <footer style={{ padding: '50px', textAlign: 'center', color: '#444', borderTop: '1px solid #222' }}>
        © 2026 Ethical Hacking Portfolio
      </footer>
    </div>
  );
};

export default App;
