"use client";
import { useState } from "react";
import { db } from "./lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function IncidentReport() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    urgent: false,
  });
  const [status, setStatus] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (name === "phone") {
      // Only allow digits
      const digitsOnly = value.replace(/\D/g, "");
      setForm((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else if (name === "name") {
      // Only allow alphabets and spaces
      const alphaOnly = value.replace(/[^a-zA-Z\s]/g, "");
      setForm((prev) => ({
        ...prev,
        [name]: alphaOnly,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhoneError("");
    setNameError("");
    // Name validation: required and only alphabets and spaces
    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }
    if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      setNameError("Name must contain only letters and spaces.");
      return;
    }
    // Phone validation: required and exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!form.phone) {
      setPhoneError("Phone number is required.");
      return;
    }
    if (!phoneRegex.test(form.phone)) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }
    setStatus("Submitting...");
    try {
      await addDoc(collection(db, "incidents"), {
        ...form,
        created: Timestamp.now(),
      });
      setStatus("Incident reported successfully. Our team will contact you soon.");
      setForm({ name: "", email: "", phone: "", description: "", urgent: false });
    } catch {
      setStatus("Error submitting report. Please try again.");
    }
  };

  return (
    <div className="min-h-screen mt-16 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-black to-gray-900 px-4 py-16 animate-fade-in">
      <div className="max-w-lg w-full bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-blue-900">
        <h1 className="text-3xl font-extrabold text-blue-400 mb-4 text-center">Report a Security Incident</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg bg-white text-gray-900 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
            pattern="[A-Za-z\s]+"
            maxLength={40}
          />
          {nameError && (
            <div className="text-red-500 text-sm mb-2">{nameError}</div>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded-lg bg-white text-gray-900 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white text-gray-900 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
            required
            pattern="\d{10}"
            maxLength={10}
            minLength={10}
            inputMode="numeric"
          />
          {phoneError && (
            <div className="text-red-500 text-sm mb-2">{phoneError}</div>
          )}
          <textarea
            name="description"
            placeholder="Describe the incident in detail..."
            value={form.description}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-2 rounded-lg bg-white text-gray-900 border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none placeholder-gray-400"
          />
          <label className="flex items-center gap-2 text-blue-500 font-medium">
            <input
              type="checkbox"
              name="urgent"
              checked={form.urgent}
              onChange={handleChange}
              className="accent-red-500"
            />
            Mark as urgent
          </label>
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
          >
            Submit Report
          </button>
        </form>
        {status && <div className="mt-4 text-center text-blue-200 font-semibold">{status}</div>}
      </div>
    </div>
  );
}
