import { motion, useInView } from "motion/react";
import { useRef } from "react";

const workExperience = [
	{
		company: "Dassault Systemes Solutions Lab, Pune",
		position: "Quality Assurance Engineer | Software Developer",
		duration: "Feb 2021 - Sep 2023",
		description:
			"Worked on the 3DEXPERIENCE platform, focusing on Quality Assurance, Automation Testing and Software Development for various applications.",
		icon: "work.svg",
		achievements: [
			"Developed automated testing frameworks",
			"Improved software quality metrics by 40%",
			"Led cross-functional team initiatives",
		],
	},
];

const WorkExperience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { threshold: 0.3, once: true });

	return (
		<section
			id="workexperience"
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
						Work <span className="gradient-text">Experience</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
				</motion.div>

				{/* Experience Content */}
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Illustration */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="order-2 lg:order-1"
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
											<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
											<line x1="8" y1="21" x2="16" y2="21" />
											<line x1="12" y1="17" x2="12" y2="21" />
										</svg>
									</div>
									<h3 className="text-xl font-bold text-white mb-2">
										Professional Journey
									</h3>
									<p className="text-slate-300 text-sm">
										Building innovative solutions through quality engineering
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Experience Timeline */}
					<motion.div
						ref={ref}
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="order-1 lg:order-2"
					>
						<div className="space-y-8">
							{workExperience.map((experience, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
									}
									transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
									className="glass-effect rounded-2xl p-8 relative"
								>
									{/* Timeline dot */}
									<div className="absolute -left-4 top-8 w-8 h-8 glass-effect rounded-full flex items-center justify-center">
										<div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
									</div>

									{/* Company Icon */}
									<div className="flex items-start gap-4 mb-4">
										<div className="glass-effect rounded-xl p-3">
											<img
												src={`icons/${experience.icon}`}
												alt="Work Icon"
												className="w-8 h-8"
											/>
										</div>
										<div className="flex-1">
											<h3 className="text-2xl font-bold text-white mb-2">
												{experience.company}
											</h3>
											<h4 className="text-lg font-semibold text-blue-400 mb-2">
												{experience.position}
											</h4>
											<p className="text-slate-400 text-sm font-medium">
												{experience.duration}
											</p>
										</div>
									</div>

									{/* Description */}
									<p className="text-slate-300 leading-relaxed mb-6">
										{experience.description}
									</p>

									{/* Achievements */}
									<div className="space-y-2">
										<h5 className="text-white font-semibold mb-3">
											Key Achievements:
										</h5>
										{experience.achievements.map(
											(achievement, achievementIndex) => (
												<motion.div
													key={achievementIndex}
													initial={{ opacity: 0, x: 20 }}
													animate={
														isInView
															? { opacity: 1, x: 0 }
															: { opacity: 0, x: 20 }
													}
													transition={{
														duration: 0.4,
														delay: 0.8 + index * 0.2 + achievementIndex * 0.1,
													}}
													className="flex items-center gap-3"
												>
													<div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
													<p className="text-slate-300 text-sm">
														{achievement}
													</p>
												</motion.div>
											)
										)}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;
