import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Skills from "./Skills";

const images = ["/profile/me1.jpg", "/profile/me2.jpg", "/profile/me3.jpeg"];

const About = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Cycle image every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % images.length);
		}, 3000); // 5 seconds

		return () => clearInterval(interval);
	}, []);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
		if (!isInView) {
			mainControls.start("hidden");
		}
	}, [isInView]);

	return (
		<section
			id="about"
			className=" justify-center min-h-screen overflow-hidden bg-gray-950 px-4 py-24"
		>
			<div className="relative h-130 flex flex-grow items-center max-w-6xl mx-auto px-8 justify-end">
				<motion.div
					className="absolute h-full rounded-2xl bg-center p-4 flex flex-grow justify-end items-center inset-0"
					style={{ backgroundImage: 'url("/profile/me2.jpg")' }}
					ref={ref}
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					initial={mainControls}
					animate={mainControls}
					transition={{ duration: 2, delay: 0.25 }}
				>
					{/* {images.map((img, i) => (
					<motion.div
						key={img}
						className="absolute h-full rounded-2xl bg-center p-4 flex flex-grow justify-end items-center inset-0"
						style={{ backgroundImage: `url(${img})` }}
						initial={{ opacity: 0 }}
						animate={{ opacity: i === activeIndex ? 1 : 0 }}
						transition={{ duration: 2 }}
					/>
				))} */}
					<motion.div
						ref={ref}
						variants={{
							hidden: { opacity: 0, y: 75 },
							visible: { opacity: 1, y: 0 },
						}}
						initial={mainControls}
						animate={mainControls}
						transition={{ duration: 0.75, delay: 0.25 }}
					>
						<div
							className="p-6 min-w-80 max-w-100 h-11/12 z-10 flex flex-col items-center justify-around md:mr-5 bg-gradient-to-t from-slate-600 to-black opacity-80 rounded-2xl
				animate-fade-in-scale"
						>
							<div className=" text-white overflow-auto">
								<h2 className="text-3xl  font-semibold text-white mb-4">
									About Me
								</h2>
								<div className="text-gray-300">
									<p className="text-sm leading-relaxed mb-4">
										I'm a versatile developer with a strong foundation in
										Automation and testing, complemented by hands-on experience
										in Web Development, Machine Learning, Data Analysis, Robotic
										Process Automation.
										<br />I enjoy building efficient and intelligent solutions.
										Being a quick learner, I'm always excited to explore new
										technologies and collaborate on impactful projects.
									</p>

									<p className="text-sm leading-relaxed mb-4">
										Beyond coding, I'm deeply curious about everything around
										me—always questioning the "why" and "how" behind every task
										I undertake. I'm an avid space enthusiast who enjoys
										listening to music, watching podcasts and dive into the
										latest tech trends.
									</p>
								</div>
							</div>
							<div className="flex space-x-10 p-1 ">
								<a
									href="mailto:ingalkarparag@gmail.com"
									target="_self"
									aria-label="Email"
									className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
								>
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
										className="lucide lucide-mail "
									>
										<rect width="20" height="16" x="2" y="4" rx="2"></rect>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
									</svg>
								</a>
								<a
									href="https://www.linkedin.com/in/parag-ingalkar-b08818160/"
									target="_blank"
									aria-label="LinkedIn"
									className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
								>
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
										className="lucide lucide-linkedin "
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect width="4" height="12" x="2" y="9"></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
								</a>
								<a
									href="https://github.com/parag-ingalkar"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="GitHub"
									className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
								>
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
										className="lucide lucide-github "
									>
										<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
										<path d="M9 18c-4.51 2-5-2-7-2"></path>
									</svg>
								</a>
								<a
									href="https://www.instagram.com/parag_ingalkar"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="Instagram"
									className="text-gray-400 hover:text-accent transition-all duration-300 transform hover:scale-105"
								>
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
										className="lucide lucide-instagram "
									>
										<rect
											width="20"
											height="20"
											x="2"
											y="2"
											rx="5"
											ry="5"
										></rect>
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
										<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
									</svg>
								</a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
			<Skills />
		</section>
	);
};
export default About;
