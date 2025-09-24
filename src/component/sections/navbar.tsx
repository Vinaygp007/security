"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MdReport } from "react-icons/md";

const navLinks = [
	{ href: "/services", label: "Services" },
	{ href: "/about", label: "About" },
	{ href: "/testimonials", label: "Testimonials" },
	{ href: "/career", label: "Careers" },
	{ href: "/blog", label: "Blog" },
	{ href: "/team", label: "Team" },
];

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<nav className="w-full sticky top-0 left-0 z-[100] animate-section-in">
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
				{/* Book Consultation Button (desktop only) */}
				<Link
					href="/contact"
					className="ml-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all border border-blue-200/30 backdrop-blur-xl animate-fade-in hidden md:inline-block"
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
					{/* Book Consultation Button (mobile menu only) */}
					<Link
						href="/contact"
						className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow hover:scale-105 hover:shadow-xl transition-all"
						onClick={() => setMenuOpen(false)}
					>
						Book Consultation
					</Link>
				</div>
			)}

		   {/* Floating Emergency Contact Button (call/WhatsApp) */}
				 {/* Floating Emergency/Report Buttons: stack vertically on mobile, float sides on desktop */}
				<div className="fixed left-1/2 -translate-x-1/2 bottom-6 flex flex-col gap-3 items-center z-[70] md:left-auto md:right-8 md:translate-x-0 md:bottom-8 md:items-end md:flex-col pointer-events-none">
					 <a
						 href="tel:+919876543210"
						 className="pointer-events-auto w-[90vw] max-w-xs md:w-auto md:max-w-none px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-400 text-white font-bold shadow-xl border border-white/20 backdrop-blur-xl animate-fade-in hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2 text-base md:text-lg md:mb-0"
						 style={{ boxShadow: '0 6px 24px 0 rgba(34, 197, 94, 0.18)' }}
						 title="Call Emergency Contact"
					 >
						 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
							 <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.125.27l-1.125 1.125a12.042 12.042 0 0 1-5.25-5.25l1.125-1.125a1.125 1.125 0 0 0 .27-1.125c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 5.25 2.25H2.625A1.125 1.125 0 0 0 1.5 3.375c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.125.27l-1.125 1.125a12.042 12.042 0 0 1-5.25-5.25l1.125-1.125a1.125 1.125 0 0 0 .27-1.125c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 5.25 2.25H2.625A1.125 1.125 0 0 0 1.5 3.375z" />
						 </svg>
						 <span className="font-bold tracking-wide">Emergency Call</span>
					 </a>
					 {pathname !== "/incident-report" && (
						 <Link
							 href="/incident-report"
							 className="pointer-events-auto w-[90vw] max-w-xs md:w-auto md:max-w-none px-6 py-3 rounded-full bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 text-white font-semibold shadow-xl border border-white/20 backdrop-blur-xl animate-fade-in hover:scale-105 hover:shadow-2xl transition-all flex items-center gap-2 text-base md:text-lg"
							 style={{ boxShadow: '0 6px 24px 0 rgba(255, 87, 34, 0.18)' }}
						 >
							 <MdReport className="text-2xl md:text-3xl text-white drop-shadow" />
							 <span className="font-bold tracking-wide">Report Problem</span>
						 </Link>
					 )}
				 </div>
		</nav>
	);
}