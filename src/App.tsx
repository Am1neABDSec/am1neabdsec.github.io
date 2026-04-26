import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/assets/css/particles.css"; 

const App: React.FC = () => {
  useEffect(() => {
    const counters = document.querySelectorAll('[data-counter-target]');
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      const updateCount = () => {
        const current = +counter.innerHTML;
        const increment = target / 100;
        if (current < target) {
          counter.innerHTML = `${Math.ceil(current + increment)}`;
          setTimeout(updateCount, 20);
        } else {
          counter.innerHTML = target.toString();
        }
      };
      updateCount();
    });
  }, []);

  return (
    <>
      <Nav />
      <main id="home" className="w-full bg-black">
        {/* Particle Overlay Elements */}
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
        {/* HERO SECTION */}
        <section className="pt-20 md:pt-0 bg-white dark:bg-black">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Secure Your Future with{" "}
                <span className="text-green-500 font-bold">Ethical Hacking Done Right</span>
              </h1>
              <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
                From deep-dive penetration testing to proactive threat monitoring, I provide tailored solutions to protect your business.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-green-700 hover:bg-green-800 rounded-lg">
                  Contact Me!
                </a>
              </div>
            </div>
            <div className="lg:mt-0 lg:col-span-5 lg:flex relative z-10">
              <img src="/assets/images/hacker.png" alt="hacker" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* ACCOLADES SECTION */}
        <section className="bg-white dark:bg-black">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 relative z-20">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="20">0</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years Experience</dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="300">0</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Engagements</dd>
              </div>
              <div className="flex flex-col items-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="10000">0</span>
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Cups of Coffee</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
