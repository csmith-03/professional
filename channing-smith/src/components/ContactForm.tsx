"use client";

import { useState } from "react";

type FormData = { name: string; email: string; message: string };

const initialData: FormData = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent! I'll get back to you soon.");
        setFormData(initialData);
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow";

  return (
    <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Your message"
        rows={5}
        value={formData.message}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <button
        type="submit"
        className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-colors"
      >
        Send message
      </button>
      {status && (
        <p className="text-center text-sm text-white/80 mt-2">{status}</p>
      )}
    </form>
  );
}
