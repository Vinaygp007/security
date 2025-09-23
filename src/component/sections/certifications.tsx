"use client";
import { FaCertificate } from "react-icons/fa";

export default function Certifications() {
	return (
		<section
			id="certifications"
			className="scroll-mt-50 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full"
		>
			<div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 border-green-400 animate-section-in">
				<FaCertificate className="text-2xl md:text-3xl text-green-400 mb-2" />
				<h3 className="text-lg md:text-xl font-bold mb-1 text-green-400">
					ISO 9001:2015
				</h3>
				<span className="text-gray-300 text-center text-xs md:text-sm">
					Quality Management
				</span>
			</div>
			<div className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 border-pink-500 animate-section-in">
				<FaCertificate className="text-2xl md:text-3xl text-pink-500 mb-2" />
				<h3 className="text-lg md:text-xl font-bold mb-1 text-pink-500">PSARA</h3>
				<span className="text-gray-300 text-center text-xs md:text-sm">
					Private Security Agencies Regulation Act
				</span>
			</div>
		</section>
	);
}