const imageIcons = [
	["bootstrap.svg", "Bootstrap"],
	["cpp.svg", "C++"],
	["css.svg", "CSS"],
	["docker.svg", "Docker"],
	["uipath.svg", "UiPath"],
	["flask-white.svg", "Flask"],
	["git.svg", "Git"],
	["github-white.svg", "GitHub"],
	["html.svg", "HTML"],
	["javascript.svg", "JavaScript"],
	["nodejs.svg", "Node.js"],
	["python.svg", "Python"],
	["powerbi.svg", "Power BI"],
	["pytorch.svg", "PyTorch"],
	["react.svg", "React"],
	["sql.svg", "SQL"],
	["tailwind.svg", "Tailwindcss"],
	["tensorflow.svg", "TensorFlow"],
	["vscode.svg", "VS Code"],
];

const Skills = () => {
	return (
		<section className="skills bg-gray-950 flex justify-center p-15">
			<div className="w-4xl inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee-move">
					{imageIcons.map((image) => {
						return (
							<li
								key={image[1]}
								className="flex justify-center flex-col items-center"
							>
								<img
									id={image[1]}
									className="max-w-15 w-11 h-11"
									src={`./icons/${image[0]}`}
								/>
								<p className="text-neutral-200 pt-2 text-nowrap">{image[1]}</p>
							</li>
						);
					})}
				</ul>
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee-move">
					{imageIcons.map((image) => {
						return (
							<li
								key={`2-${image[1]}`}
								className="flex justify-center flex-col items-center"
							>
								<img
									id={image[1]}
									className="max-w-15 w-11 h-11"
									src={`./icons/${image[0]}`}
								/>
								<p className="text-neutral-200 pt-2 text-nowrap">{image[1]}</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
