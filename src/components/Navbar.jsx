import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
			<div className="max-w-7xl mx-auto px-6 py-4">
				<div className="flex justify-between items-center">
					<Link to="home" smooth={true} duration={500}>
						<div className="text-xl font-semibold text-white hover:cursor-pointer">
							Parag Ingalkar
						</div>
					</Link>
					<div className="flex space-x-8">
						<Link
							to="about"
							smooth={true}
							duration={500}
							className="text-white hover:cursor-pointer transition-colors duration-300 font-light"
						>
							About
						</Link>
						<Link
							to="workexperience"
							smooth={true}
							duration={500}
							className="text-white hover:cursor-pointer transition-colors duration-300 font-light"
						>
							Work
						</Link>
						<Link
							to="education"
							smooth={true}
							duration={500}
							className="text-white hover:cursor-pointer transition-colors duration-300 font-light"
						>
							Education
						</Link>
						<Link
							to="projects"
							smooth={true}
							duration={500}
							className="text-white hover:cursor-pointer transition-colors duration-300 font-light"
						>
							Projects
						</Link>
						{/* <Link
							to="contact"
							smooth={true}
							duration={500}
							className="text-white hover:cursor-pointer transition-colors duration-300 font-light"
						>
							Contact
						</Link> */}
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
