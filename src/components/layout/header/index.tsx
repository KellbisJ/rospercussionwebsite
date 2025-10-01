// <span className="bold text-4xl md:text-5xl">Rosbert Arnaez</span>;

import { useState, useEffect } from 'react';
import { useDisplacementToSection } from '@/hooks/use-displacement-section';
import { Link } from 'react-router-dom';
const Header = (): React.JSX.Element => {
	const [aboutSectionElement, setAboutSectionElement] = useState<HTMLElement | null>(null);

	const { displacementToSection } = useDisplacementToSection();

	useEffect(() => {
		const aboutSectionHTML = document.getElementById('about');
		setAboutSectionElement(aboutSectionHTML);
	}, []);

	return (
		<header className="flex justify-between items-center w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 sticky top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100 text-gray-800">
			<div className="flex">
				<Link to={'/home'}>
					<span className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
						RP
					</span>
				</Link>
			</div>

			<nav className="flex items-center gap-4 sm:gap-6">
				{/* Instagram Icon */}
				{/* <a
					href="https://instagram.com/yourprofile"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-1 sm:p-2 rounded-md hover:bg-gray-50"
					aria-label="Visit our Instagram">
					<InstagramLogoIcon weight="bold" className="w-5 h-5 sm:w-6 sm:h-6" />
				</a> */}

				<a
					href="#about"
					onClick={(e) => {
						displacementToSection(e, aboutSectionElement);
					}}
					className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 sm:px-3 sm:py-2 sm:text-base rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-200">
					About
				</a>
			</nav>
		</header>
	);
};

export { Header };
