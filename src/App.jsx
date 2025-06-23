import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import { motion } from "motion/react";

function App() {
	return (
		<>
			<Navbar />

			<Hero />
			<About />
			<WorkExperience />
			<Education />
			<Projects />
			{/* <Contact /> */}
			<Footer />
		</>
	);
}
export default App;
