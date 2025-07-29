import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const navItems = [
		{ to: "about", label: "About" },
		{ to: "workexperience", label: "Work" },
		{ to: "education", label: "Education" },
		{ to: "projects", label: "Projects" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					{/* Logo */}
					<Link to="home" smooth={true} duration={500}>
						<div className="text-xl font-bold text-white hover:cursor-pointer transition-all duration-300 hover:scale-105 gradient-text">
							Parag Ingalkar
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								smooth={true}
								duration={500}
								className="relative text-white hover:cursor-pointer transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm group"
							>
								{item.label}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label="Toggle mobile menu"
					>
						<svg
							className={`w-6 h-6 transition-transform duration-300 ${
								isMobileMenuOpen ? "rotate-90" : ""
							}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							{isMobileMenuOpen ? (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							) : (
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							)}
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden transition-all duration-300 overflow-hidden ${
						isMobileMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
					}`}
				>
					<div className="glass-effect rounded-xl p-4 space-y-2">
						{navItems.map((item) => (
							<Link
								key={item.to}
								to={item.to}
								smooth={true}
								duration={500}
								className="block text-white hover:cursor-pointer transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-white/10 hover:backdrop-blur-sm"
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
