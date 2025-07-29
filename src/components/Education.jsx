import { motion, useInView } from "motion/react";
import { useRef } from "react";

const educationData = [
	{
		institution: "Friedrich Alexander University Erlangen-Nürnberg",
		degree: "M.Sc. Computational Engineering",
		duration: "Oct 2023 - Present",
		grade: "Grade: 2.5",
		icon: "university.svg",
		description:
			"Advanced studies in computational methods, numerical analysis, and engineering applications.",
	},
	{
		institution: "Pimpri Chinchwad College of Engineering, Pune",
		degree: "Bachelor's in Mechanical Engineering",
		duration: "Jun 2016 - Sep 2020",
		grade: "Grade: 9.02",
		icon: "university.svg",
		description:
			"Comprehensive engineering education with focus on mechanical systems and design principles.",
	},
];

const Education = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold: 0.3, once: true });

	return (
		<section
			id="education"
			className="section-padding bg-slate-950 relative overflow-hidden"
		>
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900"></div>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
						<span className="gradient-text">Education</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
				</motion.div>

				{/* Education Content */}
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Education Timeline */}
					<motion.div
						ref={ref}
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="order-1 lg:order-1"
					>
						<div className="space-y-8">
							{educationData.map((education, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
									}
									transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
									className="glass-effect rounded-2xl p-8 relative"
								>
									{/* Timeline dot */}
									<div className="absolute -right-4 top-8 w-8 h-8 glass-effect rounded-full flex items-center justify-center">
										<div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
									</div>

									{/* Institution Icon */}
									<div className="flex items-start gap-4 mb-4">
										<div className="glass-effect rounded-xl p-3">
											<img
												src={`icons/${education.icon}`}
												alt="University Icon"
												className="w-8 h-8"
											/>
										</div>
										<div className="flex-1">
											<h3 className="text-2xl font-bold text-white mb-2 leading-tight">
												{education.institution}
											</h3>
											<h4 className="text-lg font-semibold text-blue-400 mb-2">
												{education.degree}
											</h4>
											<p className="text-slate-400 text-sm font-medium mb-1">
												{education.duration}
											</p>
											<p className="text-slate-400 text-sm font-medium">
												{education.grade}
											</p>
										</div>
									</div>

									{/* Description */}
									<p className="text-slate-300 leading-relaxed">
										{education.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Illustration */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="order-2 lg:order-2"
					>
						<div className="relative animate-float">
							<div className="w-full max-w-md mx-auto glass-effect rounded-2xl p-8">
								<div className="text-center">
									<div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="text-white"
										>
											<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
											<path d="M6 12v5c3 3 9 3 12 0v-5" />
										</svg>
									</div>
									<h3 className="text-xl font-bold text-white mb-2">
										Academic Excellence
									</h3>
									<p className="text-slate-300 text-sm">
										Pursuing knowledge through continuous learning and research
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Education;
