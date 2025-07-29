import { motion } from "framer-motion";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-950 relative overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950 to-slate-950"></div>

			{/* Decorative elements */}
			<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center space-y-6"
				>
					{/* Main content */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-white">
							Let's <span className="gradient-text">Connect</span>
						</h3>
						<p className="text-slate-400 max-w-md mx-auto">
							Feel free to reach out for collaborations, opportunities, or just
							to say hello!
						</p>
					</div>

					{/* Social links */}
					<div className="flex justify-center space-x-6">
						{[
							{
								href: "mailto:ingalkarparag@gmail.com",
								label: "Email",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect width="20" height="16" x="2" y="4" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
								),
							},
							{
								href: "https://www.linkedin.com/in/parag-ingalkar-b08818160/",
								label: "LinkedIn",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect width="4" height="12" x="2" y="9"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								),
							},
							{
								href: "https://github.com/parag-ingalkar",
								label: "GitHub",
								icon: (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
								),
							},
						].map((social) => (
							<motion.a
								key={social.label}
								href={social.href}
								target={social.href.startsWith("mailto") ? "_self" : "_blank"}
								rel={
									social.href.startsWith("mailto") ? "" : "noopener noreferrer"
								}
								className="p-3 rounded-xl glass-effect glass-hover text-slate-400 hover:text-white transition-all duration-300"
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								aria-label={social.label}
							>
								{social.icon}
							</motion.a>
						))}
					</div>

					{/* Divider */}
					<div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto"></div>

					{/* Copyright */}
					<div className="text-slate-500 text-sm">
						<p>© {currentYear} Parag Ingalkar. All rights reserved.</p>
						<p className="mt-1">Built with React & Tailwind CSS</p>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
