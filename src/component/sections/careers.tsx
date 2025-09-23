"use client";
import Link from "next/link";

const jobs = [
	{ title: "Security Guard", color: "bg-blue-100 text-blue-900" },
	{ title: "Supervisor", color: "bg-yellow-100 text-yellow-700" },
	{ title: "Facility Manager", color: "bg-pink-100 text-pink-700" },
	{ title: "Technical Support", color: "bg-green-100 text-green-700" }
];
export default function Careers() {
	return (
		<section
			id="careers"
			className="scroll-mt-50 w-full bg-gradient-to-br from-gray-900 via-black to-blue-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col items-center border-t-4 border-blue-900 animate-section-in"
		>
			<h3 className="text-lg md:text-2xl font-bold mb-2 text-blue-900">
				Careers & Jobs
			</h3>
			<p className="text-gray-300 text-center mb-4 text-sm md:text-base">
				Join our team of dedicated security professionals. We offer rewarding
				careers, training, and growth opportunities.
			</p>
			<div className="flex flex-wrap gap-3 md:gap-4 justify-center w-full">
				{jobs.map((job) => (
					<Link
						key={job.title}
						href="/career"
						className={`px-4 py-2 rounded-full font-semibold text-xs md:text-base ${job.color} animate-fade-in cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200`}
					>
						{job.title}
					</Link>
				))}
			</div>
		</section>
	);
}
