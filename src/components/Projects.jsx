import ProjectCard from "./ProjectCard";

const projects = [
	{
		title: "Spotify Playlist Manager",
		description:
			"Manage your Collaborative Spotify Playlists. Remove songs added by a specific Collaborator",
		image: "./projects/spotify-flask.jpg",
		skills: ["React", "Tailwind", "Python", "Flask", "OAuth2"],
		github_url: "https://github.com/parag-ingalkar/spotify-python-flask",
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
		skills: ["React", "D3.js", "Visualization"],
		github_url:
			"https://github.com/parag-ingalkar/missing-migrants-visualization",
	},
	{
		title: "Plant Shopping Web App",
		description:
			"Shop for Plants for your garden. Add or Remove Plants in your Cart. React app with Redux store manager for managing states across application.",
		image: "./projects/plant-shopping.jpg",
		skills: ["React", "Redux"],
		github_url: "https://github.com/parag-ingalkar/e-plantShopping",
	},
];

const Projects = () => (
	<section id="projects" className="py-24 bg-gray-950">
		<div className="max-w-7xl mx-auto px-6">
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
					Featured Projects
				</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
			</div>
		</div>
	</section>
);
export default Projects;
