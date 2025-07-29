import { useRef, useState } from "react";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

const ROTATION_RANGE = 15;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ project, index }) => {
	const ref = useRef(null);
	const [isHovered, setIsHovered] = useState(false);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
	const ySpring = useSpring(y, { stiffness: 300, damping: 30 });

	const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

	const handleMouseMove = (e) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;

		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		const rY = mouseX / width - HALF_ROTATION_RANGE;

		x.set(rX);
		y.set(rY);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			viewport={{ once: true }}
			className="flex justify-center"
		>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{
					transformStyle: "preserve-3d",
					transform,
				}}
				className="relative w-full max-w-sm group cursor-pointer"
			>
				{/* Card Background with Glow Effect */}
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

				{/* Main Card */}
				<div
					style={{
						transform: "translateZ(50px)",
						transformStyle: "preserve-3d",
					}}
					className="relative flex flex-col h-full glass-effect rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/25"
				>
					{/* Image Section */}
					<div className="relative h-48 overflow-hidden">
						<motion.img
							src={project.image}
							alt={project.title}
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							style={{
								transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
							}}
						/>
						{/* Gradient Overlay */}
						<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

						{/* Floating Badge */}
						<motion.div
							className="absolute top-4 right-4 glass-effect rounded-full px-3 py-1"
							style={{
								transform: isHovered ? "translateZ(30px)" : "translateZ(10px)",
							}}
						>
							<span className="text-xs font-semibold text-white">Featured</span>
						</motion.div>
					</div>

					{/* Content Section */}
					<div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
						{/* Title */}
						<motion.h3
							className="text-xl font-bold text-white leading-tight"
							style={{
								transform: isHovered ? "translateZ(20px)" : "translateZ(0px)",
							}}
						>
							{project.title}
						</motion.h3>

						{/* Description */}
						<motion.p
							className="text-slate-300 text-sm leading-relaxed line-clamp-3"
							style={{
								transform: isHovered ? "translateZ(15px)" : "translateZ(0px)",
							}}
						>
							{project.description}
						</motion.p>

						{/* Skills Tags */}
						<motion.div
							className="flex flex-wrap gap-2"
							style={{
								transform: isHovered ? "translateZ(10px)" : "translateZ(0px)",
							}}
						>
							{project.skills.map((skill, skillIndex) => (
								<motion.span
									key={skill}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									transition={{
										duration: 0.3,
										delay: index * 0.1 + skillIndex * 0.05,
									}}
									className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
								>
									{skill}
								</motion.span>
							))}
						</motion.div>

						{/* Action Button */}
						<motion.div
							className="pt-4"
							style={{
								transform: isHovered ? "translateZ(25px)" : "translateZ(0px)",
							}}
						>
							<motion.a
								href={project.github_url}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 modern-button text-sm font-semibold rounded-xl px-6 py-3 w-full justify-center"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<svg
									viewBox="0 0 24 24"
									width="18"
									height="18"
									fill="currentColor"
								>
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
								View Source
							</motion.a>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default ProjectCard;
