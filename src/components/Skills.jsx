import { motion } from "framer-motion";

const skillCategories = [
	{
		title: "Frontend",
		skills: [
			["react.svg", "React"],
			["javascript.svg", "JavaScript"],
			["TypeScript.svg", "tYPEScript"],
			["html.svg", "HTML"],
			["css.svg", "CSS"],
			["tailwind.svg", "Tailwind CSS"],
			["bootstrap.svg", "Bootstrap"],
		],
	},
	{
		title: "Backend",
		skills: [
			["python.svg", "Python"],
			["nodejs.svg", "Node.js"],
			["flask-white.svg", "Flask"],
			["FastAPI.svg", "FastAPI"],
			["Express.svg", "Express"],
		],
	},
	{
		title: "Data & AI",
		skills: [
			["pytorch.svg", "PyTorch"],
			["tensorflow.svg", "TensorFlow"],
			["powerbi.svg", "Power BI"],
			["sql.svg", "SQL"],
			["SQLite.svg", "SQLite"],
			["PostgresSQL.svg", "PostgresSQL"],
			["Matplotlib.svg", "Matplotlib"],
		],
	},
	{
		title: "Other",
		skills: [
			["cpp.svg", "C++"],
			["uipath.svg", "UiPath"],
			["Postman.svg", "Postman"],
			["docker.svg", "Docker"],
			["git.svg", "Git"],
			["github-white.svg", "GitHub"],
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

				{/* Skills Grid */}
				{/* <div className=" lg:grid grid-cols-2 xl:grid-cols-4 gap-8 mb-16 bg-white/20"> */}
				<div className="grid gap-8 mx-auto md:grid-cols-2 xl:grid-cols-4 mb-16">
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
			</div>
		</section>
	);
};

export default Skills;
