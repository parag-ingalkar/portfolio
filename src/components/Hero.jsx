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
			className="text-4xl text-white font-light pl-2"
		/>
	);
};

const COLORS_TOP = ["#5f2a84", "#524096", "#2082a6", "#01cbae", "#01efac"];

const Hero = () => {
	const color = useMotionValue(COLORS_TOP[0]);

	useEffect(() => {
		animate(color, COLORS_TOP, {
			ease: "easeInOut",
			duration: 10,
			repeat: Infinity,
			repeatType: "mirror",
		});
	}, []);

	const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

	return (
		<>
			<motion.section
				id="home"
				style={{
					backgroundImage,
				}}
				className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
			>
				<div className="text-center">
					{/* text block, shifted left */}
					<div className="">
						<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold animate-fade-in-scale text-white mb-6 tracking-tight">
							Parag Ingalkar
						</h1>
						<InfoTypeWriter />
					</div>

					<Link
						to="about"
						smooth={true}
						duration={500}
						className="absolute bottom-8 z-20 hover:cursor-pointer"
						aria-label="Scroll to next section"
					>
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
							className="animate-bounce"
						>
							<path d="m6 9 6 6 6-6" />
						</svg>
					</Link>
				</div>

				<div className="absolute inset-0 z-0">
					<Canvas>
						<Stars radius={50} count={2500} factor={4} fade speed={2} />
					</Canvas>
				</div>
			</motion.section>
		</>
	);
};

export default Hero;
