import { motion, useAnimation, useInView } from "motion/react";
import { useRef, useEffect } from "react";

const Education = () => {
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
			id="education"
			className=" flex items-center min-h-screen overflow-hidden bg-gray-950 px-4 pt-24 pb-24"
		>
			<div className="education-section flex flex-grow flex-col">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 text-center">
					Education
				</h2>
				<div className="education flex flex-col md:flex-row flex-grow items-center justify-center">
					<div className="details flex-1/2 my-4">
						<ol className="timeline mr-8 md:mr-0 relative border-r-4 border-r-gray-200 ">
							<div className="absolute top -translate-y-0 z-10 -end-1 h-[calc(25%-0.875rem)] w-1 bg-gray-700" />
							<li className=" relative flex flex-col items-end py-8">
								<div className="absolute top-1/2 -translate-y-1/2 -end-3.5 h-6.5 w-6.5 rounded-full bg-white animate-ping" />
								<div className="absolute top-1/2 -translate-y-1/2 -end-4">
									<img
										src="icons/university.svg"
										alt="Work Icon"
										className=" w-7 h-7 bg-gray-200 p-1 rounded-full"
									/>
								</div>
								<motion.div
									ref={ref}
									variants={{
										hidden: { opacity: 0, x: -100 },
										visible: { opacity: 1, x: 0 },
									}}
									initial={mainControls}
									animate={mainControls}
									transition={{ duration: 0.5, delay: 0.25 }}
								>
									<div className="new-comment pr-16 ml-24 text-white text-right">
										<h3 className="text-2xl font-semibold">
											Friedrich Alexander University
											<br />
											Erlangen-Nürnberg
										</h3>

										<h2 className="text-lg font-thin">
											M.Sc. Computational Engineering
										</h2>
										<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											Oct 2023 - Present
										</time>
										<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
											Grade : 2,5
										</p>
									</div>
								</motion.div>
							</li>
							<li className=" relative flex flex-col items-end py-8">
								<div className="absolute top-1/2 -translate-y-1/2 -end-4">
									<img
										src="icons/university.svg"
										alt="Work Icon"
										className=" w-7 h-7 bg-gray-200 p-1 rounded-full "
									/>
								</div>
								<motion.div
									ref={ref}
									variants={{
										hidden: { opacity: 0, x: -100 },
										visible: { opacity: 1, x: 0 },
									}}
									initial={mainControls}
									animate={mainControls}
									transition={{ duration: 0.5, delay: 0.5 }}
								>
									<div className="new-comment pr-16 ml-24 text-white text-right">
										<h3 className="text-2xl font-semibold">
											Pimpri Chinchwad College of Engineering
											<br />
											Pune
										</h3>

										<h2 className="text-lg font-thin">
											Bachelor's in Mechanical Engineering
										</h2>
										<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											Jun 2016 - Sep 2020
										</time>
										<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
											Grade: 9.02
										</p>
									</div>
								</motion.div>
							</li>
						</ol>
					</div>
					<div className="illustration flex-1/2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 321 301"
							fill="none"
							className="w-full h-auto min-w-[350px] animate-vertical-tilt"
							style={{ maxWidth: "350px", margin: "0 auto" }}
						>
							<path
								d="M136.328 236.333c-3.72-19.201 10.074-63.058 17.435-82.587 2.454 1.162 22.989-2.839 29.576-12.388 5.269-7.639 14.219-10.639 18.598-12 5.812-1.807 15.498-1.549 17.306 2.838l1.937 4.517c6.329 18.195.818 45.853-3.099 58.198l-14.465 2.58c-10.952-17.756-5.338-39.4-1.162-48.003-4.443 5.988-16.919 12.302-22.602 14.711-.258 15.872-24.539 70.585-29.834 74.069-4.236 2.788-10.892-.128-13.69-1.935"
								fill="white"
							></path>
							<path
								fill="none"
								d="m145.604 239.496-1.808 3.286m-5.684-5.369-3.45 9.111-.296.781c-.328.789-.556 2.112 0 3.239.392.795 1.173 1.493 2.584 1.837 3.41.833 16.233 1.736 22.218 2.083 1.034.13 2.998-.365 2.584-3.384-.413-3.02-2.584-5.783-5.038-6.899-1.991-.904-7.125-2.308-12.918-1.399zm3.875 5.727a23 23 0 0 1 1.809-.358zm63.691-46.348c-.129 3.828.22 11.367 1.166 12.519 1.165 1.42 2.59 1.549 11.265-1.161 6.94-2.169 9.711-2.195 11.394-2.453 1.166-.178 2.59-.335 2.59-3.226 0-3.614-1.424-6.067-5.827-6.583-3.522-.413-8.545 1.721-10.617 2.839v-3.484M189.105 66.878c-13.301 1.344-39.437 7.01-37.578 18.917.285 1.011 1.104 2.625 2.631 4.142 1.471 1.462 3.598 2.835 6.538 3.495"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M154.158 89.937c4.159 6.472 16.352 20.528 31.848 24.98"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M185.906 114.917c.947-1.272 3.437-3.572 6.359-3.681m0-.001c-.086-3.634-3.152-13.005-14.726-21.42"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M174.192 92.828c1.201-1.945 4.891-6.074 10.041-7.029m18.742 3.348c.558.659 1.674 2.452 1.674 4.35m-1.805 23.432c2.637-.129 8.146-.515 9.08-1.032 1.167-.644 1.427-.644 1.427-1.934s-10.507.903-10.507-3.224c.951-.946 2.49-3.07 1.038-3.998s-4.497 1.763-5.837 3.224c-1.384 1.462-4.489 3.766-5.838 1.29"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M186.241 114.866c1.167 3.396 5.37 9.491 12.841 6.706 7.472-2.786 7.783-4.256 7.004-4.643m44.502-.618c1.816-.496 5.784-2.805 7.133-8.069s-.476-5.291-1.557-4.646m-12.32 8.904c.562-2.925 2.542-8.568 5.966-7.742"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M245.271 107.725c-2.387-1.961-3.848 2.538-4.28 5.033-2.697.825-3.718 4.731-3.891 6.58 6.243.64 10.679-1.036 13.488-3.027 1.72-1.22 2.83-2.557 3.372-3.553 1.34-3.57 3.294-11.02.389-12.258-2.905-1.24-3.718 1.548-3.761 3.096.311 3.51-1.513 7.398-2.464 8.904m-40.463 4.387c5.62 5.247 19.375 13.083 29.439 2.451m-30.443-1.743c0 2.436-.603 7.988-3.012 10.71m-49.534-5.02c-5.304 7.159-12.729 23.339 0 30.791m158.642-61.583 3.012-5.02m-1.54 7.644 5.557-.258m-6.694 3.324 3.347 4.351m-112.75 153.289h-90.406V300"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M266.541 211.776h-73.98v53.864"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M315.43 150.032h-60.012v71.949m49.407-118.945v57.072m0-76.986v4.853m-117.232 30.134-74.091 8.522c-8.571-6.866-6.497-17.117-4.388-21.383l51.502-6.174m52.405 16.977 25.429-2.444m18.587-2.7 16.651-1.158 22.331-10.122c-2.685-2.85-1.213-5.389-.094-6.297l-22.237-5.188-88.031 7.331"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="m101.135 105.354 7.548-.812c-5.235 11.727.766 19.705 4.596 22.809l-8.809 1.289c-7.363-8.967-5.465-19.002-3.335-23.286m195.687-5.163c-2.802-2.924-1.228-6.406-.06-7.53l10.636 2.625z"
								fill="white"
							></path>
							<path
								fill="none"
								d="M273.929 88.142c-2.778 3.527-6.668 12.749 0 21.42"
								stroke="white"
								strokeWidth="2"
							></path>
							<path
								fill="none"
								d="M209.942 69.137c2.214-1.363 18.868-.05 22.105-20.998 5.543.065 8.558-4.476 4.328-6.419-4.509-2.325-4.17-6.594-3.353-9.109 1.298-3.298 1.377-6.761 1.097-7.485"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M227.161 40.575c.629.007 1.148-.752 1.159-1.695s-.49-1.715-1.119-1.722c-.629-.008-1.148.751-1.159 1.695-.011.943.49 1.714 1.119 1.722"
								fill="white"
							></path>
							<path
								d="M224.069 33.66c.924-.989 3.316-2.435 5.483-.31m-11.766 19.56c1.7 2.615 3.566 3.358 7.191 1.67m-21.105-20.003c-.394.864-.724 2.828 1.106 3.762"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M184.361 25.696c-2.157 11.8 4.591 20.682 9.483 27.51 5.225-2.823 13.789-9.535 10.504-10.26-3.452-.761-7.092-10.177-3.74-13.057 3.933-3.38 7.478 1.733 8.154 5.61l3.168-5.478c-.896-3.832-1.247-10.553 4.514-6.785s14.211 2.781 17.716 1.817c6.912-4.947 17.649-16.486 5.31-23.066-10.263-5.473-23.618 1.446-31.771 7.663-5.519-1.457-20.397-.042-23.338 16.046"
								fill="white"
							></path>
							<path
								d="M194.229 52.416c2.494 3.003 3.734 5.497 3.579 10.664"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M191.452 69.997c-.873-3.047-1.385-8.859 3.556-7.73 6.175 1.412 18.762 7.52 17.84 10.904m.001 4.763c4.518 4.184 5.522 6.861 6.191 11.882M1.158 213.635c6.138-.559 20.6 3.101 30.262 21.924.252.492.965.505 1.216.013 9.91-19.4 22.073-39.08 60.517-15.385.59.364 1.366-.295 1.073-.925-6.237-13.415-9.608-38.997 19.457-51.689.583-.254.557-1.121-.053-1.3l-7.518-2.197c-.689-.201-.614-1.147.101-1.211 7.744-.698 18.67-.243 14.909 4.326-4.392 5.335-5.472 8.708-4.401 14.278"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
