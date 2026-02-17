import React from 'react';
import { useEffect, useState } from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/ssr';
import { useDisplacementToSection } from '@/hooks/use-displacement-section';
import { HeroCarousel } from '@/components/ui/hero-carousel';

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
		// {
		// 	imgUrl:
		// 		'https://ik.imagekit.io/137/rportfolio/IMG_20250927_100300_822.jpg?updatedAt=1758982112170',
		// 	horizontal: false,
		// },
		{
			imgUrl:
				'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114254_195.jpg?updatedAt=1758901557293',
			horizontal: true,
		},
		{
			imgUrl:
				'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114307_896.jpg?updatedAt=1758901557671',
			horizontal: true,
		},
	];
	const heroImagesSrcs = heroImagesSection.map((imgValue) => imgValue.imgUrl);

	useEffect(() => {
		const section = document.getElementById('servicesSection');
		setServicesSection(section);
	}, []);

	return (
		<section
			id="heroSection"
			className="min-h-[80vh] flex items-center px-2 mx-2 py-8 my-8 md:mx-40 md:my-8">
			<div className="max-w-350 mx-auto w-full">
				<div className="grid xl:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<span className="inline-block px-4 py-2 bg-linear-to-r from-gray-800 to-purple-700 text-gray-50 rounded-lg mb-4">
								Percussionist, Music Educator
							</span>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 text-shadow-2xs leading-tight">
								Percussionist &{' '}
								<span className="text-transparent bg-clip-text text-shadow-2xs bg-linear-to-r from-gray-50 to-purple-700">
									Percussionist Teacher
								</span>{' '}
							</h1>
							<p className="text-xl text-gray-50 text-shadow-sm leading-relaxed max-w-2xl">
								Transforming musical passion into skill through personalized lessons that resonate
								with every student's unique rhythm.
							</p>
						</div>

						<div className="flex flex-col sm:flex-row gap-4">
							<button
								onClick={(e) => {
									displacementToSection(e, servicesSection);
								}}
								className="group inline-flex items-center justify-center px-8 py-4 bg-gray-800/50 hover:bg-purple-700 text-gray-50 rounded-lg transition-all duration-300 transform cursor-pointer">
								Start Your Journey
								<ArrowRightIcon
									className="ml-2 group-hover:translate-x-1 transition-transform"
									size={20}
								/>
							</button>
						</div>
					</div>

					<HeroCarousel autoSlide={true} slides={heroImagesSrcs}></HeroCarousel>
				</div>
			</div>
		</section>
	);
};

export { HeroSection };
