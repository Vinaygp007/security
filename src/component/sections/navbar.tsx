"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
	{ href: "/services", label: "Services" },
	{ href: "/about", label: "About" },
	{ href: "/testimonials", label: "Testimonials" },
	{ href: "/career", label: "Careers" },
	{ href: "/blog", label: "Blog" },
	{ href: "/team", label: "Team" },
	{ href: "/incident-report", label: "Incident Report" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="w-full fixed top-0 left-0 z-50 animate-section-in">
			<div className="w-full px-2 md:px-8 py-2 flex items-center justify-between bg-gradient-to-r from-black via-[#0a1a3a] to-blue-900/90 backdrop-blur-xl rounded-b-2xl shadow-xl border-b border-blue-900/60">
				<Link href="/" className="flex items-center gap-3 group">
					<Image
						src="/logo.png"
						alt="Shieldsnap Security Logo"
						width={44}
						height={44}
						className="h-11 w-11 rounded-full shadow-md border border-blue-700/40 bg-black/60"
						priority
					/>
					<span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-md">
						Shieldsnap Security
					</span>
				</Link>
				<div className="hidden md:flex gap-8 text-base md:text-lg font-medium items-center">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="relative px-3 py-1 text-gray-100 hover:text-blue-400 focus:text-blue-400 transition-colors duration-300 group"
						>
							{link.label}
							<span className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 rounded-full scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left"></span>
						</Link>
					))}
				</div>
				{/* Book Consultation Button (inline, visually integrated) */}
				<Link
					href="/contact"
					className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all border border-blue-200/30 backdrop-blur-xl animate-fade-in"
					style={{ position: 'relative', top: 0, right: 0 }}
				>
					Book Consultation
				</Link>
				{/* Mobile Menu Button */}
				<button
					className="md:hidden flex items-center justify-center p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-all"
					onClick={() => setMenuOpen(true)}
					aria-label="Open menu"
				>
					<svg
						width="28"
						height="28"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="text-blue-700"
					>
						<path d="M4 7h20M4 14h20M4 21h20" />
					</svg>
				</button>
			</div>
			{/* Mobile Menu */}
			{menuOpen && (
				<div className="fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-xl z-40 flex flex-col items-center pt-24 md:hidden transition-transform duration-500">
					{/* Close Button */}
					<button
						className="absolute top-6 right-6 text-3xl text-blue-400 hover:text-blue-600 transition-colors"
						onClick={() => setMenuOpen(false)}
						aria-label="Close menu"
					>
						&times;
					</button>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-lg font-semibold text-blue-400 mb-8 hover:text-blue-200 transition-colors"
							onClick={() => setMenuOpen(false)}
						>
							{link.label}
						</Link>
					))}
					<Link
						href="/contact"
						className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all"
						onClick={() => setMenuOpen(false)}
					>
						Get Quote
					</Link>
				</div>
			)}

		{/* Floating Report Incident Button */}
		<Link
			href="/incident-report"
			className="fixed bottom-8 right-8 z-[60] px-5 py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-400 text-white font-bold shadow-lg border border-white/20 backdrop-blur-xl animate-fade-in hover:scale-105 hover:shadow-xl transition-all flex items-center gap-2"
			style={{ boxShadow: '0 4px 16px 0 rgba(255, 87, 34, 0.18)' }}
		>
			<span className="material-icons">report_problem</span>
			Report Incident
		</Link>
		</nav>
	);
}