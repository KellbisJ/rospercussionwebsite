import { useEffect, useState } from 'react';
import { BgPageImage } from '../../specific/bg-page-image';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { useDisplacementToSection } from '@/hooks/use-displacement-section';

const HeroSection = (): React.JSX.Element => {
	const [servicesSection, setServicesSection] = useState<HTMLElement | null>(null);

	const { displacementToSection } = useDisplacementToSection();

	const heroImagesSection = [
		{
			imgUrl:
				'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114332_916.jpg?updatedAt=1758901557312',
			horizontal: true,
		},
		{
			imgUrl:
				'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114329_508.jpg?updatedAt=1758901557533',
			horizontal: false,
		},
		{
			imgUrl:
				'https://ik.imagekit.io/137/rportfolio/IMG_20250927_100300_822.jpg?updatedAt=1758982112170',
			horizontal: false,
		},
	];

	useEffect(() => {
		const section = document.getElementById('servicesSection');
		setServicesSection(section);
	}, []);

	return (
		<section id="heroSection" className="min-h-[80vh] flex items-center p-2 m-2 md:mx-40 md:my-8">
			<div className="max-w-7xl mx-auto w-full">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
								Music Educator
							</span>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
								A{' '}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
									Repercussionist
								</span>{' '}
								Teacher
							</h1>
							<p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
								Transforming musical passion into skill through personalized lessons that resonate
								with every student's unique rhythm.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<button
								onClick={(e) => {
									displacementToSection(e, servicesSection);
								}}
								className="group inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
								Start Your Journey
								<ArrowRightIcon
									className="ml-2 group-hover:translate-x-1 transition-transform"
									size={20}
								/>
							</button>
							{/* <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold rounded-lg transition-all duration-300">
                  View Lessons
                </button> */}
						</div>
					</div>

					{/* Image Grid */}
					<div className="relative">
						<div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
							{heroImagesSection.map((imgData) => (
								<div
									key={imgData.imgUrl}
									className={`relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 ${
										imgData.horizontal ? 'col-span-2 aspect-video' : 'aspect-square'
									}`}>
									<BgPageImage srcImg={imgData.imgUrl} />
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export { HeroSection };
