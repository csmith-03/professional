"use client";

import Link from "next/link";
import { useState } from "react";

export default function aiscript() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans p-8 rounded-lg shadow-lg">
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black bg-opacity-50">
        
        <img src="/favicon.ico" alt="Home Icon" className="w-8 h-8 cursor-pointer" onClick={() => window.location.href = '/'} />
        <nav className="hidden md:flex gap-6 ml-auto">
          <Link href="/#about" className="hover:underline">About</Link>
          <Link href="/#professional-work" className="hover:underline">Projects</Link>
          <Link href="/#published-works" className="hover:underline">Published Works</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
        </nav>
        <button
          className="md:hidden text-white ml-auto text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </header>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center text-white md:hidden">
          <button
            className="absolute top-4 right-4 text-2xl text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <a href="/#about" className="py-2 text-xl hover:underline" onClick={toggleMenu}>About</a>
          <a href="/#professional-work" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Projects</a>
          <a href="/#published-works" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Published Works</a>
          <a href="/#contact" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Contact</a>
          <Link href="/blog" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Blog</Link>
        </div>
      )}
      <div className="pt-32 px-8 max-w-4xl mx-auto">
        <section id="hero" className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">AI Script Summarization</h1>
        </section>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          Leveraging artificial intelligence to generate concise summaries of scripts in ServiceNow. This includes: script includes, business rules, and scheduled jobs. The goal was to enhance understanding and maintainability of complex scripts from a non-technical perspective.
        </p>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg">  
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>AI-powered text summarization via UI Action in ServiceNow</li>
            <li>Storing of summaries in custom table in ServiceNow for historical context </li>
            <li>Calculation of last summary - if summary is outdated or has been updated since last run, re-summarize it </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project taught me how to use Thrive's private GPT model to summarize different script types in ServiceNow. I utilized a Script Include to handle the backend logic, a UI Action to trigger the summarization process, and a custom table to store the summaries.
          </p>
          <p className="text-lg leading-relaxed mt-4 text-gray-300">
            Writing this code required a deep understanding of ServiceNow's platform capabilities, including scripting, table management, and UI customization. I also gained experience in integrating AI models into enterprise workflows, ensuring the solution was both efficient and user-friendly.
          </p>
        </div>
        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}