"use client";
import { useEffect, useState } from "react";
import { db } from "@/src/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

type Testimonial = {
  name: string;
  location: string;
  photo?: string;
  review: string;
  caseStudy?: string;
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    async function fetchTestimonials() {
      const snapshot = await getDocs(collection(db, "testimonials"));
      const data = snapshot.docs.map(doc => doc.data() as Testimonial);
      setTestimonials(data);
    }
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(() => setActive(a => (a + 1) % testimonials.length), 4000);
      return () => clearInterval(timer);
    }
  }, [testimonials]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4 flex items-center justify-center mt-16">
        <div className="max-w-xl w-full mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Client Testimonials</h1>
          <div className="relative">
            {testimonials.length === 0 && (
              <div className="text-gray-300 text-center">No testimonials available yet.</div>
            )}
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === active ? "opacity-100 scale-100 z-10 animate-section-in" : "opacity-0 scale-95 -z-10 pointer-events-none"
                } flex flex-col items-center bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border-t-4 border-blue-400`}
              >
                {t.photo && (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-20 w-20 rounded-full object-cover mb-4 border-4 border-blue-400 shadow-lg"
                  />
                )}
                <p className="text-gray-200 text-lg mb-4 text-center">&ldquo;{t.review}&rdquo;</p>
                <div className="text-blue-300 font-bold text-base">{t.name}</div>
                <div className="text-gray-400 text-sm mb-2">{t.location}</div>
                {t.caseStudy && (
                  <div className="bg-blue-900/40 rounded-xl p-4 mt-4 text-gray-200 text-sm shadow">
                    <span className="font-bold text-blue-400">Case Study:</span> {t.caseStudy}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Manual navigation (optional) */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${i === active ? "bg-blue-400" : "bg-gray-600"} transition-all`}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}