"use client";
import { useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await addDoc(collection(db, "contacts"), form);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Submission failed. Try again!");
    }
    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 w-full bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 border-blue-700 animate-section-in"
    >
      <h3 className="text-lg md:text-2xl font-bold mb-2 text-blue-700">Contact Us</h3>
      <p className="text-gray-300 text-center mb-4 text-sm md:text-base">
        Ready to secure your business or home? Get in touch for a free consultation!
      </p>
      <form className="w-full max-w-xs md:max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-section-in w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-section-in w-full"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 animate-section-in w-full"
          rows={4}
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all animate-pulse w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <div className="text-green-400 text-center mt-2">Thank you! We’ll get back to you soon.</div>}
      </form>
    </section>
  );
}