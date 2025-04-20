"use client"
import Link from "next/link";
import { useState } from "react";

export default function liquidfiles() {
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
          <a href="#about" className="py-2 text-xl hover:underline" onClick={toggleMenu}>About</a>
          <a href="#professional-work" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Projects</a>
          <a href="#published-works" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Published Works</a>
          <a href="#contact" className="py-2 text-xl hover:underline" onClick={toggleMenu}>Contact</a>
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

      <main className="pt-32 px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <section id="hero" className="text-center">
            <h1 className="text-4xl font-extrabold mb-2 text-white sm:text-5xl sm:mb-4">What I've learned from my first year as a software developer</h1>
            <h2 className="text-lg text-gray-400">April 20, 2025</h2>
          </section>
        
          <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 p-6 rounded-lg shadow-lg mt-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Coming up on my first year post-graduation, I thought I would share some insights and lessons I learned from my first year as a software developer, and transitioning from a student to a full-time developer.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-gray-300">
            I initially had a huge worry that I would not meet any of the expectations of my team - because let's be honest, I was just a confused 22 year old who still mostly just looked up everything on StackOverflow. As a student, we get so used to only prioritizing how fast we can finish an assignment rather than focusing on how much we can learn from an assignment. This was a big adjustment for me. I had this mindset that there would be strict deadlines on when I should have something done, but in reality, I wasn't met with that. I learned that the team was there to help me grow and learn - not put me to the test. 
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              One of the most important lessons I learned was the value of asking questions and seeking feedback. It’s better to ask for clarification than to make assumptions and go down the wrong path. There were numerous times when I was afraid to ask for clarification because I was worried about looking incompetent. But I learned that asking questions is a sign of strength, not weakness. It shows that you are engaged and willing to learn.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Finally, if I had to give any advice to someone like me back then, I would say trust yourself. You are capable of more than you think. I was constantly surprised by my ability to learn and adapt to new challenges. Embrace the discomfort of being a beginner and know that it’s okay to not have all the answers. The most important thing is to keep pushing yourself to be better - which sounds cliche, but it’s true.
            </p>
            <div className="text-center mt-8">
            <a
              href="/blog"
              className="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-400 transition"
            >
              Return to Blog
            </a>
          </div>
            
          </div>
          
        </div>
      </main>
    </div>
  );
}