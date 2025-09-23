"use client";
import { FaUserShield, FaCamera, FaClipboardCheck } from "react-icons/fa";

const cards = [
	{
		icon: (
			<FaUserShield className="text-3xl md:text-4xl text-blue-400 mb-4 animate-bounce" />
		),
		title: "On-Site Security",
		desc: "24/7 personnel, rapid response, and custom solutions.",
		border: "border-blue-400",
	},
	{
		icon: (
			<FaCamera className="text-3xl md:text-4xl text-pink-400 mb-4 animate-spin" />
		),
		title: "Electronic Surveillance",
		desc: "Advanced CCTV, alarm systems, and remote monitoring.",
		border: "border-pink-400",
	},
	{
		icon: (
			<FaClipboardCheck className="text-3xl md:text-4xl text-green-400 mb-4 animate-pulse" />
		),
		title: "Risk Assessment",
		desc: "Expert risk analysis and mitigation strategies.",
		border: "border-green-400",
	},
];

export default function Services() {
	return (
		<section
			id="services"
			className="scroll-mt-50 flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center w-full"
		>
			{cards.map((card, i) => (
				<div
					key={card.title}
					className={`w-full md:w-1/3 bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 flex flex-col items-center border-t-4 ${card.border} hover:scale-105 hover:-rotate-2 transition-all duration-500 animate-section-in`}
					style={{ animationDelay: `${i * 0.2}s` }}
				>
					{card.icon}
					<h3
						className={`text-lg md:text-2xl font-extrabold mb-2 ${card.border.replace(
							"border-",
							"text-"
						)}`}
					>
						{card.title}
					</h3>
					<p className="text-gray-300 text-center text-sm md:text-base">
						{card.desc}
					</p>
				</div>
			))}
		</section>
	);
}