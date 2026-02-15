import { useDisplacementToSection } from '@/hooks/use-displacement-section';
import { Link } from 'react-router-dom';
const Header = (): React.JSX.Element => {
	const { displacementToSection } = useDisplacementToSection();

	const handleAboutClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const aboutSection = document.getElementById('about');
		displacementToSection(e, aboutSection);
	};

	return (
		<header className="flex justify-between items-center w-full px-4 py-3 sm:px-6 sm:py-4 lg:px-8 sticky top-0 backdrop-blur-sm text-gray-50 bg-gray-800/20">
			<div className="flex">
				<Link to={'/home'}>
					<span className="drop-shadow-sm text-xl font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
						RP
					</span>
				</Link>
			</div>

			<nav className="flex items-center gap-4 sm:gap-6">
				<button
					onClick={handleAboutClick}
					className="drop-shadow-sm text-sm font-medium text-gray-900 transition-colors duration-200 px-2 py-1 sm:px-3 sm:py-2 sm:text-base rounded-md bg-gray-50 border border-transparent hover:border-gray-500 cursor-pointer">
					About
				</button>
				{/* <button
					onClick={handleAboutClick}
					className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 sm:px-3 sm:py-2 sm:text-base rounded-md hover:bg-gray-50 border border-transparent hover:border-gray-200 cursor-pointer">
					About
				</button> */}
			</nav>
		</header>
	);
};

export { Header };
