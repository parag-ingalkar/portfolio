import { motion, useAnimation, useInView } from "motion/react";
import { useRef, useEffect } from "react";

const WorkExperience = () => {
	const ref = useRef(null);
	// const isInView = useInView(ref, { once: false });
	const isInView = useInView(ref, {
		threshold: 0.1,
		once: false,
	});

	const mainControls = useAnimation();

	useEffect(() => {
		mainControls.start(isInView ? "visible" : "hidden");
	}, [isInView]);
	return (
		<section
			id="workexperience"
			aria-labelledby="workexperience-heading"
			className=" flex items-center min-h-screen overflow-hidden bg-gray-950 px-4 pt-24"
		>
			<div className="experience-section flex flex-col flex-grow">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 text-center">
					Work Experience
				</h2>
				<div className="experience flex flex-col md:flex-row flex-grow items-center justify-center">
					<div className="illustration flex-1/2 animate-pulse-zoom">
						<svg
							viewBox="0 0 600 500"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="w-full h-auto min-w-[400px]"
							style={{ maxWidth: "400px", margin: "0 auto" }}
						>
							<path fill="none" d="M0 0h600v500H0z"></path>
							<path
								d="M107.061 233.073a4.273 4.273 0 1 0 0-8.546 4.273 4.273 0 0 0 0 8.546Z"
								fill="none"
								stroke="white"
								strokeWidth="2"
							></path>
							<path
								fill="none"
								d="M115.434 229.235c8.619-.887 22.142.162 23.74 6.829s-4.505 9.105-7.757 9.491c-12.379 1.967-28.793 1.041-28.793-9.491"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M112.32 239.318a.985.985 0 1 0 .001-1.97.985.985 0 0 0-.001 1.97Zm9.532-.986c0 .479-.446.986-1.15.986-.705 0-1.151-.507-1.151-.986s.446-.986 1.151-.986c.704 0 1.15.507 1.15.986Zm7.231.986a.985.985 0 1 0 .001-1.97.985.985 0 0 0-.001 1.97Zm302.218-126.541a3.944 3.944 0 1 0 0-7.889 3.944 3.944 0 0 0 0 7.889Z"
								stroke="white"
								strokeWidth="2"
							></path>
							<path
								fill="none"
								d="M439.05 105.381h15.034c3.147 0 4.661.696 4.661 5.569 0 4.734-.039 10.866 0 13.341.027 1.74-.839 3.666-3.729 3.944s-14.49.116-19.928 0c-2.02 0-5.594-1.145-5.594-5.801v-5.22m7.559-3.615 7.231 4.93m0 0 13.147-12.161"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="m447.616 115.571 3.593 3.616 3.593 3.615m-20.378 0 5.3-7.231m20.482 243.708-2.683 2.687c-1.691 1.693-3.467.705-4.144 0l-10.789-10.395c-1.592-1.481-2.939-2.943-8.959-8.687-.616-.617-1.593-2.193-.569-3.56s6.779-8.544 9.528-11.962c.834-1.208 2.647-2.645 4.959-.495 1.991 1.851 8.817 8.259 14.648 13.131"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M442.476 327.732c.34 6.235 2.628 16.271 14.462 20.049m15.549.482c-.543-1.378-4.707-2.984-6.281 0-1.622 3.079-.382 5.671.673 6.18 1.348.649 3.327.989 5.417-2.748"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M472.832 346.344c-.122.72-.247 1.023-.345 1.919-.128 1.167-.211 2.391-.191 3.432.04 1.826.401 3.086 1.427 2.478 2.057-1.22 3.168-2.22 3.464-3.241.493-1.716.496-5.001-2.278-7.149-3.346-2.593-7.119-2.523-10.087 0-2.947 2.504-3.753 6.512-3.592 8.592.177 2.275 1.875 7.16 7.414 7.237s8.54-2.91 9-4.308m-296.795-48.092c-1.181-4.561-5.105-12.974-11.345-10.13s-2.6 7.938 0 10.13c1.75 1.185 5.511 2.453 6.559-1.955s-3.368-6.221-4.609-4.265c-.654.77-1.394 2.701.886 4.265"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M208.696 85.976c-.29-1.632 1.418-2.888 2.89-2.125l2.943 1.526a4 4 0 0 0 3.722-.021l2.926-1.56c1.463-.78 3.185.457 2.914 2.092l-.542 3.27a4 4 0 0 0 1.171 3.535l2.387 2.3c1.194 1.15.55 3.17-1.089 3.418l-3.278.495a4 4 0 0 0-2.999 2.206l-1.45 2.981c-.725 1.491-2.845 1.503-3.587.021l-1.484-2.965a4 4 0 0 0-3.025-2.17l-3.283-.459c-1.642-.229-2.308-2.241-1.128-3.405l2.361-2.328a4 4 0 0 0 1.13-3.547z"
								stroke="white"
								strokeWidth="2"
							></path>
							<path
								d="M310.184 233.045v27.938m21.035-24.651v26.623m-49.2 94.357c-6.946.865-23.207 4.055-26.769 10.541-1.068 1.946-2.308 6.682 1.282 10.054 3.591 3.373 10.152 2.487 12.984 1.622l16.51-6.649"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M376.675 308.365c-12.96.417-70.203 28.129-97.205 41.934-2.299 15.211 7.404 26.133 12.543 29.692 26.914-7.813 82.153-23.649 87.798-24.483s11.236-4.862 13.326-6.772c14.633-17.086 3.833-31.602-3.397-36.725-5.146-3.647-9.589-3.758-13.065-3.646"
								fill="white"
							></path>
							<path
								d="M255.272 304.488c9.183.613 49.242 16.138 68.223 24.275l-43.408 21.691c-19.427 5.697-31.361 3.821-35.005 2.593-21.038-10.136-12.796-35.141-4.437-44.404 5.387-4.585 11.337-4.374 14.627-4.155"
								fill="white"
							></path>
							<path
								d="M357.476 360.271c5.739 2.758 8.842 6.371 10.416 9.335 3.372 7.717-2.683 12.355-9.595 10.174-3.82-1.205-4.721-2.013-6.744-3.69-1.026-.852-5.821-5.307-11.295-10.569"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="m247.651 235.564 3.673 66.748a10 10 0 0 0 9.985 9.451h109.869c5.523 0 10-4.477 10-10v-68.279c0-5.575-4.56-10.074-10.135-9.999l-113.542 1.531c-5.685.076-10.163 4.871-9.85 10.548"
								fill="white"
							></path>
							<rect
								x="251.022"
								y="312.914"
								width="130.156"
								height="6.245"
								rx="3.122"
								fill="white"
							></rect>
							<path
								d="M331.548 188.674c11.449-.164 36.647 8.545 46.672 35.99m-71.816-36.155c-26.13 5.094-38.62 16.269-48.48 37.798m135.908-11.805 6.409-10.682m0 13.641 8.71-7.231m-7.395 12.16c1.698.658 5.555 1.282 7.395-1.479m-175.513-8.409-9.861-10.189m19.885 8.546-5.916-15.284m-6.573 22.679-7.396-2.793m161.216 27.636c6.081 9.532 12.983 20.871 0 42.207"
								stroke="white"
								fill="none"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M331.712 189.495c1.479-4.273.132-7.148-1.183-7.696-7.888 7.231-19.852 4.547-24.289.165-1.578 1.446-.658 5.723-.001 7.038 8.546 9.466 20.707 4.163 25.473.493"
								fill="white"
							></path>
							<path
								d="m296.708 215.789.663-1.017a14.26 14.26 0 0 1 17.284-5.442v0a14.26 14.26 0 0 0 16.162-3.946l5.168-6.029m-90.715 49.796c-2.465 5.807-5.39 19.885 2.63 29.745"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M354.372 122.316c-3.615 12.983-5.423 14.133-10.682 19.885 0-5.685-.976-15.226-.976-19.199-17.219 0-31.751-7.029-36.865-10.544.183 11.919-10.991 19.713-10.991 19.713s1.603 4.813 2.519 15.586c.733 8.618-1.374 6.953-2.519 5.043-3.297-10.636-8.701-7.794-10.991-5.043-28.098-45.655 15.112-54.476 23.356-53.636 6.228-5.317 14.913-9.485 21.019-10.096 22.022-2.204 31.993 17.24 26.13 38.291"
								fill="white"
							></path>
							<path
								fill="none"
								d="M295.243 160.924c2.958 18.06 22.813 31.045 37.141 16.416s11.46-41.407 9.929-53.903m-58.771 23.201c-1.807 4.437-.111 14.269 11.701 14.269m-6.491-11.832c-.261.95-.052 3.199 2.876 4.602"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								d="M341.915 158.607c3.856-1.608 6.574-7.56 5.528-17.092m-27.22 27.938c3.779.986 3.54-1.727 6.409-4.108"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<circle
								cx="331.506"
								cy="146.495"
								fill="#white"
								r="2.465"
							></circle>
							<circle
								cx="309.813"
								cy="146.823"
								fill="#white"
								r="2.465"
							></circle>
							<path
								d="M304.446 141.187c.519-1.528 2.757-4.353 7.56-3.437m15.447.479c1.146-.993 4.261-2.382 7.56 0m-15.511 6.901c-.383 3.245-.643 9.827 1.378 10.189"
								stroke="#white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<path
								fill="none"
								d="M414.21 294.206c43.878 12.161 122.695 26.13 86.935-15.283-11.285-11.12-27.938-24.158-54.725-35.662m15.284-34.022c27.28-17.474 71.224-53.574 28.759-58.176-42.465-4.601-81.238 11.34-95.316 19.885m-39.113 12.755c18.077-38.948 47.33-119.67 19.721-130.977-34.511-14.134-79.211 26.622-115.695 123.911m-40.203-26.485c-40.428-22.131-122.958-56.17-129.663-15.283s75.212 74.993 117.009 86.935m10.731 21.457c-58.997 30.074-132.92 71.667-91.974 93.345 16.763 8.874 59.655 3.451 79.376-4.602"
								stroke="white"
								strokeWidth="2"
								strokeLinecap="round"
							></path>
							<ellipse
								cx="314.457"
								cy="440.14"
								rx="81.348"
								ry="9.86"
								fill="white"
							></ellipse>
						</svg>
					</div>
					<div className="details flex-1/2 my-4">
						<ol className="timeline ml-8 md:ml-0 relative border-l-4 border-l-gray-200">
							<div className="absolute top -translate-y-0 z-10 -start-1 h-[calc(50%-0.875rem)] w-1 bg-gray-700" />
							<li className=" relative flex flex-col items-start py-8">
								<div className="absolute top-1/2 -translate-y-1/2 -start-4">
									<img
										src="icons/work.svg"
										alt="Work Icon"
										className=" w-7 h-7 bg-gray-200 p-1 rounded-full "
									/>
								</div>
								<motion.div
									className="min-w-[360px] min-h-[360px] flex items-center"
									ref={ref}
									variants={{
										hidden: { opacity: 0, x: 100 },
										visible: { opacity: 1, x: 0 },
									}}
									initial={mainControls}
									animate={mainControls}
									transition={{ duration: 0.5, delay: 0.25 }}
								>
									<div className="new-comment pl-16 mr-24 text-white">
										<h3 className="text-2xl font-semibold">
											Dassault Systemes Solutions Lab, Pune
										</h3>

										<h2 className="text-lg font-thin">
											Quality Assurance Engineer | Software Developer
										</h2>
										<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
											Feb 2021 - Sep 2023
										</time>
										<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
											Worked on the 3DEXPERIENCE platform, focusing on Quality
											Assurance, Automation Testing and Software Development for
											various applications.
										</p>
									</div>
								</motion.div>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkExperience;
