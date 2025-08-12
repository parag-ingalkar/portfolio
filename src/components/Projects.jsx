import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "PomoKan - Productivity Tool",
		description:
			"Manage your tasks with Pomodoro technique and integrated Kanban board and Eisenhower matrix. Add tasks, set timers, and track your progress.",
		image: "./projects/pomokan.jpg",
		skills: [
			"Python",
			"TypeScript",
			"FastAPI",
			"React",
			"TailwindCSS",
			"JWT",
			"Framer-motion",
		],
		github_url: "https://github.com/parag-ingalkar/PomoKan",
		project_url: "https://pomokan-five.vercel.app/",
	},
	{
		title: "Spotify Playlist Manager",
		description:
			"Manage your Collaborative Spotify Playlists. Remove songs added by a specific Collaborator.",
		image: "./projects/spotify-flask.jpg",
		skills: [
			"Python",
			"JavaScript",
			"Flask",
			"React",
			"TailwindCSS",
			"OAuth2",
			"API",
		],
		github_url:
			"https://github.com/parag-ingalkar/spotify-playlist-manager-app",
		project_url: "https://spotify-playlist-manager-app.vercel.app/",
	},
	{
		title: "MNIST Classification - Neural Network in Python",
		description:
			"Neural Network Package in Python and numpy from scratch. Classify MNIST handwritten digits.",
		image: "./projects/mnist-nn-python.png",
		skills: ["Python", "Numpy", "Deep Learning"],
		github_url:
			"https://github.com/parag-ingalkar/python_NN_MNIST_from_scratch",
	},
	{
		title: "Neural Network Logic Gates in C++ From Scratch",
		description:
			"Custom Neural Network from scratch in C++. Train, Save and Load models for XOR and XNOR gates. CLI interaction.",
		image: "./projects/nn-cpp.jpg",
		skills: ["C++", "Deep Learning", "Custom Tensor"],
		github_url: "https://github.com/parag-ingalkar/nn_logic_gates",
	},
	{
		title: "Missing Migrants Visualization",
		description:
			"Interactive visualization to view number of missing migrants on the world map over a period of years. ",
		image: "./projects/missing-migrants.jpg",
		skills: ["JavaScript", "React", "D3.js", "Visualization"],
		github_url:
			"https://github.com/parag-ingalkar/missing-migrants-visualization",
		project_url:
			"https://parag-ingalkar.github.io/missing-migrants-visualization/",
	},
	{
		title: "Plant Shopping Web App",
		description:
			"Shop for Plants for your garden. Add or Remove Plants in your Cart. React app with Redux store manager for managing states across application.",
		image: "./projects/plant-shopping.jpg",
		skills: ["JavaScript", "React", "Redux"],
		github_url: "https://github.com/parag-ingalkar/e-plantShopping",
	},
];

const Projects = () => (
	<section
		id="projects"
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
					Featured <span className="gradient-text">Projects</span>
				</h2>
				<div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
				<p className="text-slate-400 text-lg max-w-2xl mx-auto">
					Here are some of my recent projects that showcase my skills in web
					development, machine learning, and data visualization.
				</p>
			</motion.div>

			{/* Projects Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard project={project} index={index} key={index} />
				))}
			</div>
		</div>
	</section>
);

export default Projects;
