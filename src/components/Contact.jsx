const Contact = () => (
	<section id="contact" className="py-24 bg-gray-950">
		<div className="max-w-4xl mx-auto px-6">
			<div className="text-center mb-16">
				<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
					Let's Work Together
				</h2>
				<p className="text-xl text-gray-300 mb-12 mx-auto">
					Ready to collaborate? Drop me a message!
				</p>
			</div>
			<form className="space-y-8">
				<div className="grid md:grid-cols-2 gap-6">
					<input
						placeholder="Your name"
						required=""
						className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
						type="text"
						name="name"
					/>
					<input
						placeholder="your.email@example.com"
						required=""
						className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
						type="email"
						name="email"
					/>
				</div>
				<div>
					<textarea
						name="message"
						rows="6"
						placeholder="Your Message..."
						className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
					/>
				</div>
				<div className="flex justify-center">
					<button
						type="submit"
						className="items-center px-8 py-4 rounded-lg font-medium bg-green-900 hover:bg-green-700 text-white transition hover:scale-105"
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	</section>
);
export default Contact;
