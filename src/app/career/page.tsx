"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

type Job = {
  title: string;
  description: string;
  location: string;
  type: string;
};

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", job: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchJobs() {
      const snapshot = await getDocs(collection(db, "jobs"));
      const jobList = snapshot.docs.map(doc => doc.data() as Job);
      setJobs(jobList);
    }
    fetchJobs();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      await addDoc(collection(db, "applications"), form);
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", job: "", message: "" });
    } catch (err) {
      alert("Submission failed. Try again!");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4 ">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Careers at Shieldsnap Security</h1>
          
          {/* Job Openings */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Current Openings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobs.length === 0 && (
                <div className="text-gray-300">No openings available at the moment.</div>
              )}
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 border-t-4 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-200 mb-2">{job.title}</h3>
                  <p className="text-gray-200 mb-2">{job.description}</p>
                  <div className="text-sm text-gray-400 mb-1"><span className="font-bold text-blue-400">Location:</span> {job.location}</div>
                  <div className="text-sm text-gray-400"><span className="font-bold text-blue-400">Type:</span> {job.type}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Employee Benefits */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Employee Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">Competitive Salary & Incentives</li>
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">Health & Life Insurance</li>
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">Paid Training & Certifications</li>
              <li className="bg-blue-900/40 rounded-xl p-4 shadow">Career Growth Opportunities</li>
            </ul>
          </section>

          {/* Training Details */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Training & Development</h2>
            <p className="text-gray-300 mb-2">
              All employees receive comprehensive training in security protocols, emergency response, and customer service. We support ongoing learning and certification to help you advance your career.
            </p>
          </section>

          {/* Application Form */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Apply Now</h2>
            <form className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl p-6 flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
              />
              <select
                name="job"
                value={form.job}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full bg-gray-900 text-gray-200"
              >
                <option value="">Select Job Opening</option>
                {jobs.map((job, idx) => (
                  <option key={idx} value={job.title}>{job.title}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Why are you a good fit?"
                value={form.message}
                onChange={handleChange}
                required
                className="px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 w-full"
                rows={4}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all w-full"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
              {success && <div className="text-green-400 text-center mt-2">Application submitted! We’ll contact you soon.</div>}
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}