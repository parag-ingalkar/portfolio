const Footer = () => (
	<footer className="bg-gray-950 py-8">
		<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
			<p className="text-gray-400 mb-4 md:mb-0">
				Made with ❤️ using React & Tailwind
			</p>
			<p className="text-gray-400 text-sm">
				© {new Date().getFullYear()} Parag Ingalkar. All rights reserved.
			</p>
		</div>
	</footer>
);
export default Footer;
