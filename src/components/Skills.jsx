import { motion } from "framer-motion";

const skillCategories = [
	{
		title: "Frontend",
		skills: [
			["react.svg", "React"],
			["javascript.svg", "JavaScript"],
			["html.svg", "HTML"],
			["css.svg", "CSS"],
			["tailwind.svg", "Tailwind CSS"],
			["bootstrap.svg", "Bootstrap"],
		],
	},
	{
		title: "Backend & Tools",
		skills: [
			["python.svg", "Python"],
			["nodejs.svg", "Node.js"],
			["flask-white.svg", "Flask"],
			["docker.svg", "Docker"],
			["git.svg", "Git"],
			["github-white.svg", "GitHub"],
		],
	},
	{
		title: "Data & AI",
		skills: [
			["pytorch.svg", "PyTorch"],
			["tensorflow.svg", "TensorFlow"],
			["powerbi.svg", "Power BI"],
			["sql.svg", "SQL"],
		],
	},
	{
		title: "Other",
		skills: [
			["cpp.svg", "C++"],
			["uipath.svg", "UiPath"],
			["vscode.svg", "VS Code"],
		],
	},
];

const allSkills = skillCategories.flatMap((category) => category.skills);

const Skills = () => {
	return (
		<section className="py-16 bg-transparent">
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Skills & <span className="gradient-text">Technologies</span>
					</h3>
					<div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
				</motion.div>

				{/* Skills Grid for larger screens */}
				<div className="hidden lg:grid grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={category.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
							className="glass-effect rounded-2xl p-6 space-y-4"
						>
							<h4 className="text-xl font-semibold text-white text-center mb-4">
								{category.title}
							</h4>
							<div className="grid grid-cols-2 gap-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skill[1]}
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{
											duration: 0.4,
											delay: categoryIndex * 0.1 + skillIndex * 0.05,
										}}
										viewport={{ once: true }}
										whileHover={{ scale: 1.05 }}
										className="flex flex-col items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
									>
										<img
											src={`./icons/${skill[0]}`}
											alt={skill[1]}
											className="w-10 h-10 mb-2 group-hover:animate-pulse"
										/>
										<p className="text-slate-300 text-sm text-center font-medium">
											{skill[1]}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Marquee for mobile and as additional visual element */}
				<div className="lg:hidden mb-8">
					<div className="relative overflow-hidden">
						<div className="flex animate-marquee-move">
							{[...allSkills, ...allSkills].map((skill, index) => (
								<div
									key={`${skill[1]}-${index}`}
									className="flex flex-col items-center mx-6 min-w-[80px]"
								>
									<div className="glass-effect rounded-xl p-4 mb-2">
										<img
											src={`./icons/${skill[0]}`}
											alt={skill[1]}
											className="w-8 h-8"
										/>
									</div>
									<p className="text-slate-300 text-sm text-center font-medium">
										{skill[1]}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Enhanced marquee for desktop as decorative element */}
				<div className="hidden lg:block">
					<div className="relative overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
						<div className="flex animate-marquee-move">
							{[...allSkills, ...allSkills].map((skill, index) => (
								<motion.div
									key={`marquee-${skill[1]}-${index}`}
									className="flex flex-col items-center mx-8 min-w-[100px] group"
									whileHover={{ scale: 1.1 }}
								>
									<div className="glass-effect rounded-xl p-4 mb-3 group-hover:bg-white/10 transition-all duration-300">
										<img
											src={`./icons/${skill[0]}`}
											alt={skill[1]}
											className="w-10 h-10 group-hover:animate-pulse"
										/>
									</div>
									<p className="text-slate-300 text-sm text-center font-medium group-hover:text-white transition-colors duration-300">
										{skill[1]}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
