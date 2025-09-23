"use client";
import { FaClipboardList } from "react-icons/fa";

export default function ServiceDetails() {
  return (
    <section id="service-details" className="w-full bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 border-blue-500 animate-section-in">
      <FaClipboardList className="text-2xl md:text-3xl text-blue-500 mb-2" />
      <h3 className="text-lg md:text-2xl font-bold mb-2 text-blue-500">Service Details</h3>
      <ul className="list-disc pl-4 md:pl-6 text-gray-300 text-sm md:text-base space-y-2 text-left w-full max-w-xs md:max-w-md mx-auto">
        <li>24/7 on-site security personnel</li>
        <li>Remote monitoring and rapid response</li>
        <li>Custom security solutions for businesses and residences</li>
        <li>Facility management and compliance audits</li>
        <li>Risk assessment and mitigation planning</li>
      </ul>
    </section>
  );
}