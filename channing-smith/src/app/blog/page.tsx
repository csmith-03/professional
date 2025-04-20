"use client";
import Link from "next/link";
import { useState } from "react";
import BlogPostGrid from "./BlogPostGrid"; // Update the path to match the actual location of BlogPostGrid


export default function Blog() {
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

      <main className="pt-32 px-8">
        <section id="hero" className="text-center py-20">
          <h1 className="text-4xl font-extrabold mb-6 text-white sm:text-5xl sm:mb-8">Blog</h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center">
            Here, I share insights, opinions, and experiences from my journey as a software developer.
          </p>
        </section>
        <BlogPostGrid />
      </main>
    </div>
  );
}