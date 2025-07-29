import { TypeAnimation } from "react-type-animation";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { Link } from "react-scroll";
import {
	useMotionTemplate,
	useMotionValue,
	motion,
	animate,
} from "framer-motion";

const InfoTypeWriter = () => {
	return (
		<TypeAnimation
			sequence={[
				"I am a Software Developer.",
				1000,
				"I am an Automation Expert.",
				1000,
				"I am a Web Developer.",
				1000,
				"I am a Machine Learning Enthusiast.",
				1000,
				"I am a Data Analyst.",
				1000,
				"I am a Tech Explorer.",
				1000,
				"I am a Traveller.",
				1000,
				"I love to Code.",
				1000,
				"I love to listen to music.",
				1000,
			]}
			wrapper="span"
			cursor={true}
			repeat={Infinity}
			className="text-2xl md:text-3xl lg:text-4xl text-slate-300 font-light pl-2 leading-relaxed"
		/>
	);
};

const COLORS_TOP = ["#1e293b", "#334155", "#475569", "#64748b", "#3b82f6"];

const Hero = () => {
	const color = useMotionValue(COLORS_TOP[0]);

	useEffect(() => {
		animate(color, COLORS_TOP, {
			ease: "easeInOut",
			duration: 12,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);

	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0f172a 40%, ${color})`;

	return (
		<>
			<motion.section
				id="home"
				style={{
					backgroundImage,
				}}
				className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-24 text-gray-200"
			>
				<div className="relative z-10 text-center max-w-5xl mx-auto">
					{/* Main content */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="space-y-8"
					>
						{/* Greeting */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="text-lg md:text-xl text-slate-400 font-medium tracking-wide"
						>
							Hello, I'm
						</motion.p>

						{/* Name */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
						>
							<span className="gradient-text">Parag</span>{" "}
							<span className="text-white">Ingalkar</span>
						</motion.h1>

						{/* Type animation */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="min-h-[3rem] flex items-center justify-center"
						>
							<InfoTypeWriter />
						</motion.div>

						{/* CTA Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.0 }}
							className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
						>
							<Link
								to="projects"
								smooth={true}
								duration={500}
								className="modern-button px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
							>
								View My Work
							</Link>
							<Link
								to="about"
								smooth={true}
								duration={500}
								className="glass-effect glass-hover px-8 py-4 text-lg font-semibold rounded-xl text-white cursor-pointer inline-block"
							>
								About Me
							</Link>
						</motion.div>
					</motion.div>
				</div>
				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 1.5 }}
					className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
				>
					<Link
						to="about"
						smooth={true}
						duration={500}
						className="flex flex-col items-center text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer group"
						aria-label="Scroll to next section"
					>
						<span className="text-sm mb-2 opacity-75 group-hover:opacity-100 transition-opacity">
							Scroll Down
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="animate-bounce group-hover:animate-pulse"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</Link>
				</motion.div>

				{/* Enhanced 3D Stars Background */}
				<div className="absolute inset-0 z-0">
					<Canvas camera={{ position: [0, 0, 1] }}>
						<Stars
							radius={100}
							count={3000}
							factor={4}
							saturation={0.5}
							fade
							speed={1}
						/>
					</Canvas>
				</div>

				{/* Gradient overlay for better text readability */}
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/20 z-5"></div>
			</motion.section>
		</>
	);
};

export default Hero;
