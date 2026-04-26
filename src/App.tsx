// src/App.tsx
import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "/assets/css/particles.css"; 

const App: React.FC = () => {
  useEffect(() => {
    // Logic for the animated counters (Accolades Section)
    const counters = document.querySelectorAll('[data-counter-target]');
    
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-counter-target')!;
      const updateCount = () => {
        const current = +counter.innerHTML;
        const increment = target / 100; // Adjust speed here

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
      <main id="home" className="w-full">
        {/* Floating light elements */}
        <div className="light x1"></div>
        <div className="light x2"></div>
        <div className="light x3"></div>
        <div className="light x4"></div>
        <div className="light x5"></div>
        <div className="light x6"></div>
        <div className="light x7"></div>
        <div className="light x8"></div>
        <div className="light x9"></div>
      
        {/* #### HERO SECTION #### */}
        <section className="pt-20 md:pt-0 bg-white dark:bg-black">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 id="dynamicHeadline" className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Secure Your Future with{" "}
                <span id="dynamicWords" className="text-green-500 font-bold">
                  Ethical Hacking Done Right
                </span>
              </h1>
              <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
                From deep-dive penetration testing to proactive threat monitoring, I provide tailored solutions to secure your network and protect your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900 transition-colors">
                  More About Me
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border-4 border-green-300 hover:bg-green-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700">
                  Contact Me!
                </a>
              </div>
            </div>
            <div id="hacker-logo" className="lg:mt-0 lg:col-span-5 lg:flex relative z-10">
              <img src="/assets/images/hacker.png" alt="hacker illustration" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* #### ACCOLADES SECTION #### */}
        <section className="bg-white dark:bg-black">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-28 lg:px-6 border-4 border-solid border-green-700 relative z-20 bg-white dark:bg-black">
            <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="20">0</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Years of Experience</dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-5xl md:text-7xl font-extrabold">
                  <span data-counter-target="300">0</span>+
                </dt>
                <dd className="font-light text-2xl text-gray-500 dark:text-gray-400">Engagements Completed</dd>
              </div>
              <div className="flex flex-col items-center justify-center
