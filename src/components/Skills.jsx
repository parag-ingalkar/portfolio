const imageIcons = [
	"bootstrap.svg",
	"cpp.svg",
	"css.svg",
	"docker.svg",
	"uipath.svg",
	"flask-white.svg",
	"git.svg",
	"github-white.svg",
	"html.svg",
	"javascript.svg",
	"nodejs.svg",
	"python.svg",
	"powerbi.svg",
	"pytorch.svg",
	"react.svg",
	"sql.svg",
	"tailwind.svg",
	"tensorflow.svg",
	"vscode.svg",
];

const Skills = () => {
	return (
		<section className="skills bg-gray-950 flex justify-center p-15">
			<div className="w-4xl inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee-move">
					{imageIcons.map((image) => {
						return (
							<li key={image}>
								<img
									id={image}
									className="max-w-15 w-11 h-11"
									src={`./icons/${image}`}
								/>
							</li>
						);
					})}
				</ul>
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee-move">
					{imageIcons.map((image) => {
						return (
							<li key={`2-${image}`}>
								<img
									id={`2-${image}`}
									className="max-w-15 w-11 h-11"
									src={`./icons/${image}`}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
