"use client";
import { useState, useEffect } from "react";

const testimonials = [
	{
		name: "Priya S., Mumbai",
		text: "ShieldSnap’s team is professional and reliable. Highly recommended!",
		color: "border-pink-500",
	},
	{
		name: "Rahul M., Delhi",
		text: "Best security service in India. Fast response and great support.",
		color: "border-blue-500",
	},
	{
		name: "Amit K., Bangalore",
		text: "ShieldSnap keeps our business safe 24/7. True professionals.",
		color: "border-green-400",
	},
];

export default function Testimonials() {
	const [active, setActive] = useState(0);
	useEffect(() => {
		const timer = setInterval(
			() => setActive((a) => (a + 1) % testimonials.length),
			3500
		);
		return () => clearInterval(timer);
	}, []);
	return (
		<section
			id="testimonials"
			className="scroll-mt-50 flex justify-center items-center w-full relative min-h-[220px]"
		>
			{testimonials.map((t, i) => (
				<div
					key={t.name}
					className={`w-full max-w-xs md:max-w-md bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 ${t.color} transition-all duration-700 ${
						i === active
							? "opacity-100 scale-100 z-10 animate-section-in"
							: "opacity-0 scale-95 -z-10"
					} absolute md:static`}
					style={{ minHeight: "180px" }}
				>
					<div className="flex items-center gap-2 mb-2">
						<span className="text-yellow-400 text-lg md:text-xl">★★★★★</span>
					</div>
					<p className="text-gray-300 text-center mb-2 text-sm md:text-base">
						{t.text}
					</p>
					<span className="font-bold text-pink-400">{t.name}</span>
				</div>
			))}
		</section>
	);
}