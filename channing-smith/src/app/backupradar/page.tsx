"use client"
import Link from "next/link";
import { useState } from "react";

export default function backupradar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans">
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

      {!isMenuOpen && (
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
      )}
    <main className="min-h-screen bg-gradient-to-br from-blue-900 to-black text-white font-sans p-8 rounded-lg shadow-lg">
      <div className=" pt-32 px-8 max-w-4xl mx-auto">
        <section id="hero" className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">Backup Radar Integration</h1>
        </section>
        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
          A custom integration to view backup monitoring and reporting for clients inside ServiceNow. This project streamlined the process of identifying backup failures and successes, so that engineers have the data easily accessible to them inside ServiceNow.
        </p>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-center">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Custom table to track backup performance.</li>
            <li>Automated pull of backup jobs per client.</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">What I Learned</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            This project enhanced my understanding of scripted REST endpoints and how to integrate external systems with ServiceNow. I  create a custom table to store backup performance data, which allowed for better tracking and reporting of backup jobs.
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
      </main>
    </div>
  );
}