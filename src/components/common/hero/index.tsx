import { BgPageImage } from '../../specific/bg-page-image';

const HeroSection = (): React.JSX.Element => {
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
	return (
		<section className="flex flex-col items-center text-center text-gray-700 p-2 m-6 md:mx-48 md:my-8">
			<div className="grid grid-cols-2 gap-4 w-full md:max-w-[700px] lg:max-w-[800px]">
				{heroImagesSection.map((imgData) => (
					<div
						key={imgData.imgUrl}
						className={` ${
							imgData.horizontal
								? 'col-span-2 w-full overflow-hidden aspect-video'
								: 'w-full overflow-hidden aspect-square'
						}`}>
						<BgPageImage srcImg={imgData.imgUrl} />
					</div>
				))}
			</div>

			<div className="lg:text-left">
				<h1 className="my-4">Mastering piano, guitar, and beyond, example</h1>
			</div>
		</section>
	);
};

export { HeroSection };
