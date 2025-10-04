import { CopyrightIcon, EnvelopeIcon, SignpostIcon } from '@phosphor-icons/react/dist/ssr';
const Footer = (): React.JSX.Element => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-slate-900 text-white py-16 px-4">
			<div className="max-w-6xl mx-auto">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand & Description */}
					<div className="space-y-4">
						<h3 className="text-2xl font-bold text-blue-400">Rosbert Arnaez</h3>
						<p className="text-slate-300 leading-relaxed">
							Helping students discover the joy of music through personalized, patient instruction
							for more than fifteen years.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						{/* <h4 className="text-lg font-semibold">Quick Links</h4>
						<ul className="space-y-2 text-slate-300">
							<li>
								<a href="#about" className="hover:text-white transition duration-300">
									About Me
								</a>
							</li>
							<li>
								<a href="#lessons" className="hover:text-white transition duration-300">
									Lesson Programs
								</a>
							</li>
							<li>
								<a href="#testimonials" className="hover:text-white transition duration-300">
									Student Success
								</a>
							</li>
							<li>
								<a href="#contact" className="hover:text-white transition duration-300">
									Get Started
								</a>
							</li>
						</ul> */}
					</div>

					<div className="space-y-4">
						<h4 className="text-lg font-semibold">Get In Touch</h4>
						<div className="space-y-2 text-slate-300">
							<p className="flex items-center">
								<span className="mr-2">
									<EnvelopeIcon size={20} color="#fcfcfc" weight="fill" />
								</span>
								rospercussion@gmail.com
							</p>
							{/* <p className="flex items-center">
								<span className="mr-2">📞</span>
								(555) 123-4567
							</p> */}
							<p className="flex items-start">
								<span className="mr-2">
									<SignpostIcon size={20} color="#fcfcfc" weight="fill" />
								</span>
								<span>
									Australia
									<br />
									Western Australia, Perth
								</span>
							</p>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-slate-700 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						{/* Copyright */}
						<div className="text-slate-400 text-sm flex items-center">
							<CopyrightIcon /> {currentYear} Rosbert Arnaez. All rights reserved.
						</div>

						{/* Legal Links */}
						{/* <div className="flex space-x-6 text-sm text-slate-400">
							<a href="#" className="hover:text-white transition duration-300">
								Privacy Policy
							</a>
							<a href="#" className="hover:text-white transition duration-300">
								Terms of Service
							</a>
						</div> */}
					</div>
				</div>

				{/* Musical Touch */}
				<div className="text-center mt-6">
					<p className="text-slate-500 text-sm italic">
						🎶 Making beautiful music, forming amazing students 🎶
					</p>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
