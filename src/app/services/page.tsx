"use client";
import { FaUserShield, FaCamera, FaClipboardList, FaBuilding } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/src/component/sections/navbar";
import Footer from "@/src/component/sections/footer";

const services = [
  {
    icon: <FaUserShield className="text-blue-500 text-4xl mb-4" />,
    title: "Physical Guarding",
    desc: "Professional, trained security personnel for on-site protection of your premises, assets, and people. 24/7 vigilance and rapid response.",
    cta: "Get Guarding Quote",
    href: "/contact",
    color: "border-blue-500"
  },
  {
    icon: <FaCamera className="text-pink-500 text-4xl mb-4" />,
    title: "Electronic Surveillance",
    desc: "Advanced CCTV, alarm systems, and remote monitoring solutions. Real-time alerts and evidence recording for maximum safety.",
    cta: "Request Surveillance Demo",
    href: "/contact",
    color: "border-pink-500"
  },
  {
    icon: <FaClipboardList className="text-green-500 text-4xl mb-4" />,
    title: "Risk Analysis",
    desc: "Comprehensive risk assessment and mitigation planning. Identify vulnerabilities and implement strategies to minimize threats.",
    cta: "Book Risk Assessment",
    href: "/contact",
    color: "border-green-500"
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-4xl mb-4" />,
    title: "Facility Management",
    desc: "Integrated facility management including access control, visitor management, and compliance audits for a secure environment.",
    cta: "Consult Facility Expert",
    href: "/contact",
    color: "border-yellow-500"
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-8 text-center">Our Security Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col items-center border-t-4 ${service.color} animate-section-in`}
              >
                {service.icon}
                <h2 className="text-2xl font-bold text-blue-200 mb-2 text-center">{service.title}</h2>
                <p className="text-gray-200 text-center mb-6">{service.desc}</p>
                <Link
                  href={service.href}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all"
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}