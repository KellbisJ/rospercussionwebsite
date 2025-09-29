import { BgPageImage } from '@/components/specific/bg-page-image';

interface Service {
	title: string;
	description: string;
	teachingImage?: string;
	isHorizontal?: boolean;
}

const services: Service[] = [
	{
		title: 'Private Lessons',
		description: 'One-on-one sessions tailored to your level.',
		teachingImage:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114208_020.jpg?updatedAt=1758901557482',
		isHorizontal: false,
	},
	{
		title: 'Group Workshops',
		description: 'Interactive workshops for up to 10 students.',
	},
	{
		title: 'Online Courses',
		description: 'Self-paced video lessons you can access anytime.',
	},
];

const ServicesSection = (): React.JSX.Element => {
	return (
		<section className="p-2 m-auto md:max-w-[700px] lg:max-w-[800px]">
			<div className="w-full">
				<h2 className="text-center mb-8 text-3xl font-bold text-gray-900">What I Offer</h2>
				<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
					{services.map((service) => (
						<article
							key={service.title}
							className="flex flex-col justify-center items-center bg-white p-6 shadow-sm text-center transition duration-300 ease-in-out border border-gray-200">
							<h3 className="text-xl font-semibold text-gray-800 my-2 sm:text-2xl sm:mb-12">
								{service.title}
							</h3>
							{service.teachingImage && !service.isHorizontal && (
								<div className="w-full h-80 overflow-hidden aspect-square mt-4">
									<BgPageImage srcImg={service.teachingImage} />
								</div>
							)}
							<p className="text-gray-600 mt-4">{service.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export { ServicesSection };
