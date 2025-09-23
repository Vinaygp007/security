"use client";
import { useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

export default function ContactPage() {
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
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4 mt-16">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
                rows={5}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all w-full"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <div className="text-green-400 text-center mt-2">Thank you! We’ll get back to you soon.</div>}
            </form>
            {/* Contact Info & Map */}
            <div className="flex flex-col gap-6 justify-between">
              <div className="bg-blue-900/40 rounded-xl p-4 shadow text-gray-200 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaPhoneAlt className="text-blue-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <FaEnvelope className="text-blue-400" />
                  <span>info@shieldsnapsecurity.com</span>
                </div>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-xl"><FaLinkedin /></a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-xl"><FaTwitter /></a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 text-xl"><FaFacebook /></a>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160994647!2d72.7410992!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b0e8b2e6b%3A0x1c1b1b1b1b1b1b1b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1695470000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}