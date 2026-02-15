// import { BgPageImage } from '@/components/specific/bg-page-image';
import {
	StudentIcon,
	UsersIcon,
	// VideoIcon,
	ArrowRightIcon,
	MicrophoneStageIcon,
	FilmSlateIcon,
	MusicNoteIcon,
	SignpostIcon,
	GlobeIcon,
	// ChalkboardTeacherIcon,
} from '@phosphor-icons/react/ssr';
import { Link } from 'react-router-dom';
import type { Service } from './types';

const services: Service[] = [
	{
		title: 'Private Lessons',
		description:
			'One-on-one sessions tailored to your level and goals. Perfect for focused, personalized learning.',
		teachingImage:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114208_020.jpg?updatedAt=1758901557482',
		icon: <StudentIcon size={32} />,
		type: 'privateLesson',
	},
	{
		title: 'Group Workshops',
		description:
			'Interactive workshops for up to 10 students. Learn collaboratively and build musical community.',
		icon: <UsersIcon size={32} />,
		type: 'groupWorkshops',
		teachingImage:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114316_048.jpg?updatedAt=1758901557478',
	},
	// {
	// 	title: 'Online Courses',
	// 	description:
	// 		'Comprehensive self-paced video lessons accessible anytime, anywhere. Perfect for busy schedules.',
	// 	icon: <VideoIcon size={32} />,
	// 	type: 'onlineCourses',
	// },
	{
		title: 'Live Concert Percussion',
		description:
			'Elevate your live events with professional percussion services. Available for concerts, festivals, and performances - delivering powerful rhythms and engaging stage presence that transforms musical experiences.',
		icon: <MicrophoneStageIcon size={32} />,
		type: 'livePerformances',
		teachingImage:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114307_896.jpg?updatedAt=1758901557671',
	},
	{
		title: 'Recording Sessions',
		description:
			'Professional recording services and rehearsal coaching to perfect your timing and technique.',
		icon: <FilmSlateIcon size={32} />,
		type: 'recordingSessions',
		teachingImage:
			'https://ik.imagekit.io/137/rportfolio/IMG-20251004-WA0010.jpg?updatedAt=1759589603016',
	},
	// {
	// 	title: 'Master Classes',
	// 	description:
	// 		'Advanced instruction from experienced professionals to elevate your skills to the next level.',
	// 	icon: <ChalkboardTeacherIcon size={32} />,
	// 	type: 'masterClasses',
	// },
];

const ServicesSection = (): React.JSX.Element => {
	return (
		<section id="servicesSection" className="p-2 m-2 my-8 md:mx-40 ">
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col justify-center items-center  text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-50 text-shadow-2xs mb-4">What I Offer</h2>

					<div className="space-y-2 text-lg text-start md:text-center text-gray-50">
						<div className="flex items-start md:items-center gap-2">
							<MusicNoteIcon className="min-w-6" color="#6f1c9b" weight="fill" />
							<p>
								Comprehensive music education designed to inspire and challenge students at every
								level.
							</p>
						</div>

						<div className="flex items-start md:items-center gap-2">
							<SignpostIcon className="min-w-6" color="#db1a1a" weight="fill" />
							<p>
								Based in Perth, Western Australia, I offer in-person classes and events throughout
								the region.
							</p>
						</div>

						<div className="flex items-start md:items-center gap-2">
							<GlobeIcon className="min-w-6 text-blue-600" weight="duotone" />
							<p>
								For those outside this area, I also provide engaging online lessons tailored to your
								needs.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
					{services.map((service) => (
						<article
							key={service.title}
							className="group bg-gray-800 rounded-[10px] p-8 shadow-lg transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col">
							<div className="flex items-center justify-between mb-6">
								<div className="w-12 h-12 bg-linear-to-br from-[#2845D6] to-purple-700 rounded-xl flex items-center justify-center text-gray-50">
									{service.icon}
								</div>
							</div>

							<h3 className="text-2xl font-bold text-gray-50 mb-4">{service.title}</h3>

							{service.teachingImage && (
								<div className="w-full h-48 rounded-xl overflow-hidden mb-4">
									<img
										src={service.teachingImage}
										alt="teaching samples"
										className="w-full h-full object-cover"
										loading="lazy"
									/>
								</div>
							)}

							<p className="text-gray-50 leading-relaxed mb-6 grow">{service.description}</p>

							<Link to={`/teach/${service.type}`}>
								<button className="text-purple-700 font-bold text-sm flex items-center cursor-pointer">
									Learn more
									<ArrowRightIcon size={16} className="ml-1" />
								</button>
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export { ServicesSection };
