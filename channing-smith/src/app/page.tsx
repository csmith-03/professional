"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const fullText = 'console.log("Hello world! I\'m Channing Smith!");';
  const [developerText, setDeveloperText] = useState("");
  const developerFullText = 'Hello world... I\'m Channing Smith!';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < developerFullText.length) {
        setDeveloperText(developerFullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("An error occurred. Please try again.");
    }
  };

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
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
        <header className="sticky top-0 left-0 w-full p-4 flex justify-between items-center bg-black bg-opacity-50 z-40">
          <img src="/favicon.ico" alt="Home Icon" className="w-8 h-8 cursor-pointer" onClick={() => window.location.href = '/'} />
          <nav className="hidden md:flex gap-6 ml-auto">
            <a href="#about" className="hover:underline">About</a>
            <a href="#professional-work" className="hover:underline">Projects</a>
            <a href="#published-works" className="hover:underline">Published Works</a>
            <a href="#contact" className="hover:underline">Contact</a>
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
        <section id="hero" className="flex flex-col items-center justify-center min-h-[60vh] text-center relative">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-black/80 rounded-xl blur-sm -z-10"></div>
  <Image
    src="/profile.png"
    alt="Channing Smith"
    width={200}
    height={200}
    className="rounded-full border-4 border-indigo-400 shadow-lg mb-6"
  />
  <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
    Channing Smith
  </h1>
  <p className="text-2xl text-indigo-300 mb-2">Full-Stack Developer & Tech Enthusiast</p>
  <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
    Building innovative solutions at the intersection of technology and creativity.
  </p>
  <div className="flex gap-6 justify-center mt-4">
    <a
      href="https://github.com/csmith-03"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <Image
        src="/githubblue.webp"
        alt="GitHub"
        width={40}
        height={40}
        className="hover:opacity-80 transition-opacity"
      />
    </a>
    <a
      href="https://www.linkedin.com/in/channing-smith-1261061b3/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <Image
        src="/linkedin.png"
        alt="LinkedIn"
        width={40}
        height={40}
        className="hover:opacity-80 transition-opacity"
      />
    </a>
  </div>
</section>

        <section id="about" className="py-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">About Me</h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I strongly consider myself not only a developer, but a creative technologist. I love to build things that solve problems and make people's lives easier, while also thinking outside the box to creative unique and visually appealing solutions.
            </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            I graduated with a degree in Computer Science from College of Charleston. Currently, I work at Thrive, where I work on platform integrations, particularly within ServiceNow. Recently, I have been focusing on a new/custom client portal in Next.js.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            In my free time, I enjoy creating custom websites, reading up on new technologies, and hanging out with my dog, Archie!
          </p>
        </section>

        <section id="professional-work" className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 px-4 sm:px-8 mb-16 rounded-lg shadow-lg">
          <h2 className="text-4xl font-semibold mb-8 text-center">Professional Work</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12">
            Here are some of the key projects I have worked on during my professional career at Thrive.
          </p>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4 sm:px-8">
            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/clientportal.png"
                alt="Client Portal"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Client Portal</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A custom client portal built with Next.js to enhance client experience and streamline service management.
                </p>
                <Link
                  href="/clientportal"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
              </div>
            </li>

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
                <Link
                  href="/aiorder"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
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
                  A tool created for ServiceNow users to be able to summarize: script includes, business rules, script actions, etc.
                </p>
                <Link
                  href="/aiscript"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
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
                <h3 className="text-2xl font-bold mb-2">Keeper Integration</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A custom integration with Keeper Security to help reporting and remediation of security issues for clients.
                </p>
                <Link
                  href="/keeper"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
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
                  A file-sharing integration that creates file sharing links triggered by Salesforce events.
                </p>
                <Link
                  href="/liquidfiles"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
              </div>
            </li>

            <li className="relative group border border-gray-700 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/backupradar.png"
                alt="Backup Radar Integration"
                width={400}
                height={300}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Backup Radar Integration</h3>
                <p className="text-sm text-gray-400 mb-4">
                  A custom integration to view backup monitoring and reporting for clients.
                </p>
                <Link
                  href="/backupradar"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  Learn More
                </Link>
              </div>
            </li>

          </ul>
        </section>

        <section id="key-skills" className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-lg shadow-lg px-4 sm:px-8">
          <h2 className="text-4xl font-semibold mb-8 text-center">Key Skills</h2>
          <div className="max-w-3xl mx-auto px-4 sm:px-8">
            <details className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <summary className="cursor-pointer text-xl font-semibold">Technical Skills</summary>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>React / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>Python</li>
                <li>Tailwind CSS</li>
                <li>REST APIs</li>
                <li>Git / Version Control</li>
                <li>ServiceNow Development</li>
              </ul>
            </details>
            <details className="bg-gray-800 text-white p-4 rounded-lg shadow-lg mb-4">
              <summary className="cursor-pointer text-xl font-semibold">ServiceNow Skills</summary>
              <ul className="list-disc list-inside mt-4 space-y-2">
                <li>Script Includes</li>
                <li>UI Actions</li>
                <li>Custom Tables</li>
                <li>Business Rules</li>
                <li>Client Scripts</li>
                <li>CMDB Configuration</li>
                <li>ServiceNow CLI</li>
                <li>IRE Configuration</li>
                <li>Integration with AI Models</li>
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

        <section id="published-works" className="py-20 bg-gradient-to-br from-gray-900 via-black to-blue-900 rounded-lg shadow-lg px-4 sm:px-8 mt-16">
          <h2 className="text-4xl font-semibold mb-8 text-center">Published Works</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12">
            The below papers reflect my academic research and contributions while a student at College of Charleston and conducting research at the University of Cincinnati. 
          </p>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-indigo-400">"Formal Analysis of Deontic Logic Model for Ethical Decisions"</h3>
              <p className="text-sm text-gray-400 mb-4">
                Published in Proceedings of the 17th International Conference on Agents and Artificial Intelligence - Volume 1: ICAART, 218-223, 2025 , Porto, Portugal
              </p>
              <a
                href="https://www.scitepress.org/Link.aspx?doi=10.5220/0013385200003890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Read Article
              </a>
              <br />
              <button
                onClick={() => openModal("/EXPO 2023-2.png")}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                View Poster
              </button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2 text-indigo-400">"A Second Look at the Portability of Deep Learning Side-Channel Attacks over EM Traces"</h3>
              <p className="text-sm text-gray-400 mb-4">
                Published in RAID '24: Proceedings of the 27th International Symposium on Research in Attacks, Intrusions and Defenses

              </p>
              <a
                href="https://dl.acm.org/doi/10.1145/3678890.3678900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                Read Article
              </a>
              <br />
              <button
                onClick={() => openModal("/EXPO 2023-1.png")}
                className="text-indigo-400 hover:text-indigo-300 underline"
              >
                View Poster
              </button>
            </div>
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={closeModal}
            >
              <div
                className="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative z-60"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={modalImage} alt="Poster" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          )}
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-4xl font-semibold mb-8 text-center">Contact</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed text-center mb-12">
            Feel free to reach out to me for collaboration or inquiries!
          </p>
          <form className="max-w-3xl mx-auto space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition"
            >
              Send Message
            </button>
          </form>
          {formStatus && <p className="text-center mt-4">{formStatus}</p>}
        </section>
      </main>

      <footer className="py-8 bg-black text-white text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://www.linkedin.com/in/channing-smith-1261061b3/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
          <a href="https://github.com/csmith-03" target="_blank" rel="noopener noreferrer">
            <Image
              src="/githubblue.webp"
              alt="GitHub"
              width={32}
              height={32}
              className="hover:opacity-80 transition-opacity"
            />
          </a>
        </div>
        <p className="text-sm text-gray-400">© 2026 Channing Smith. All rights reserved.</p>
      </footer>
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          width: 1ch;
          background-color: currentColor;
          animation: blink 1s steps(2, start) infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
