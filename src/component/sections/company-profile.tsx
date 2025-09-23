"use client";
import { FaAward, FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function CompanyProfile() {
  const [clients, setClients] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    let c = 0, y = 0;
    const interval = setInterval(() => {
      if (c < 500) setClients(++c);
      if (y < 20) setYears(++y);
      if (c >= 500 && y >= 20) clearInterval(interval);
    }, 2);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="company" className="scroll-mt-50 bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center border-t-4 border-yellow-400 animate-section-in w-full">
      <FaAward className="text-3xl md:text-4xl text-yellow-400 mb-4 animate-bounce" />
      <h2 className="text-xl md:text-3xl font-extrabold mb-2 text-yellow-400">About SecureGuard</h2>
      <p className="text-gray-300 text-center mb-4 text-sm md:text-base">
        With 20+ years of experience, SecureGuard is India’s leading security provider, trusted by top businesses and residences.
      </p>
      <div className="flex gap-6 md:gap-8 mt-4 flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <FaUsers className="text-xl md:text-2xl text-blue-400 mb-1 animate-pulse" />
          <span className="font-bold text-blue-400 text-lg md:text-2xl">{clients}+</span>
          <span className="text-xs text-gray-400">Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <FaAward className="text-xl md:text-2xl text-yellow-400 mb-1 animate-bounce" />
          <span className="font-bold text-yellow-400 text-lg md:text-2xl">{years}+</span>
          <span className="text-xs text-gray-400">Years</span>
        </div>
      </div>
    </section>
  );
}