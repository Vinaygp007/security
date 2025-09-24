import { FaDownload } from "react-icons/fa";

export default function BrochureSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 animate-fade-in">
      <div className="bg-gradient-to-br from-blue-900 via-black to-gray-900/80 rounded-3xl shadow-2xl p-8 border-t-4 border-blue-400 flex flex-col items-center max-w-xl w-full">
        <h2 className="text-2xl md:text-3xl font-extrabold text-blue-400 mb-4 text-center">
          Download Our Company Brochure
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Get a detailed overview of Shieldsnap Security’s services, certifications, and trust credentials. Perfect for sharing with your team or management.
        </p>
        <a
          href="/brochure.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
        >
          <FaDownload className="text-xl" /> Download Brochure
        </a>
      </div>
    </section>
  );
}
