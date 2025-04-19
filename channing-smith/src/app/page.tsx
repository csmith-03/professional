"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const toggleMenu = () => {
      menu?.classList.toggle('hidden');
    };
    menuToggle?.addEventListener('click', toggleMenu);
    return () => {
      menuToggle?.removeEventListener('click', toggleMenu);
    };
  }, []);
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white font-sans">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">Channing Smith</h1>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <button className="md:hidden text-white" id="menu-toggle">
          ☰
        </button>
      </header>

      <div id="mobile-menu" className="hidden flex-col items-center bg-black bg-opacity-75 text-white p-4 md:hidden">
        <a href="#about" className="py-2 hover:underline">About</a>
        <a href="#projects" className="py-2 hover:underline">Projects</a>
        <a href="#contact" className="py-2 hover:underline">Contact</a>
      </div>

      <main className="pt-32 px-8">
      </main>
        <section id="hero" className="text-center py-20">
          <h2 className="text-6xl font-bold leading-tight mb-6">Software Developer</h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed">
            I blend code and creativity to craft unique digital experiences. Explore my portfolio to see my work.
          </p>
        </section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Hi, I'm Channing! As a developer and creative, I thrive at the intersection of technology and creativity. My passion lies in building innovative projects that inspire and engage, while also helping out as many people as possible. Welcome to my portfolio!
          </p>
        </section>

        <section id="professional-work" className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900">
          <h2 className="text-4xl font-semibold mb-8 text-center">Professional Work</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12">
            Here are some of the key projects I have worked on during my professional career at Thrive.
          </p>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logo.png"
                alt="AI Summarization"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">AI Order Summarization</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A tool created for PMs to generate a project summary of their assigned orders using AI.
                </p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </a>
              </div>
            </li>
            
            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/logo.png"
                alt="AI Script Summarization"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">AI Script Summarization</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A tool created for PMs to generate a project summary of their assigned orders using AI.
                </p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </a>
              </div>
            </li>

            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/keeper.png"
                alt="Keeper Integration - ServiceNow"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Keeper Integration - ServiceNow</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A note-taking app designed to help users organize their thoughts and tasks efficiently.
                </p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </a>
              </div>
            </li>

            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/liquidfiles.jpg"
                alt="LiquidFiles Integration - Salesforce"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">LiquidFiles Integration</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A web application to track global statistics and trends in real-time, providing valuable insights.
                </p>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </a>
              </div>
            </li>

          </ul>
        </section>

        <section id="key-skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-purple-900">
          <h2 className="text-4xl font-semibold mb-8 text-center">Key Skills</h2>
          <div className="max-w-3xl mx-auto">
            <details className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <summary className="cursor-pointer text-xl font-semibold">Technical Skills</summary>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>JavaScript / TypeScript</li>
                <li>React / Next.js</li>
                <li>Node.js</li>
                <li>CSS / Tailwind CSS</li>
                <li>RESTful APIs</li>
                <li>Git / Version Control</li>
                <li>ServiceNow Development</li>
              </ul>
            </details>
            <details className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
              <summary className="cursor-pointer text-xl font-semibold">Soft Skills</summary>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Communication</li>
              </ul>
            </details>
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Contact</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12">
            Feel free to reach out to me for collaboration or inquiries!
          </p>
          <form className="max-w-3xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
  );
}
