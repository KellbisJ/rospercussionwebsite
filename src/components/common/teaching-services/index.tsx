import { BgPageImage } from '@/components/specific/bg-page-image';
import {
	StudentIcon,
	UsersIcon,
	// VideoIcon,
	ArrowRightIcon,
	MicrophoneStageIcon,
	FilmSlateIcon,
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
			'https://ik.imagekit.io/137/rportfolio/IMG_20251002_163942_557.jpg?updatedAt=1759437828941',
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
		<section id="servicesSection" className="py-20 p-2 m-2 md:mx-40 md:my-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">What I Offer</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Comprehensive music education designed to inspire and challenge students at every level
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
					{services.map((service) => (
						<article
							key={service.title}
							className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
							<div className="flex items-center justify-between mb-6">
								<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
									{service.icon}
								</div>
							</div>

							<h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
								{service.title}
							</h3>

							{service.teachingImage && (
								<div className="w-full h-48 rounded-xl overflow-hidden mb-4">
									<BgPageImage srcImg={service.teachingImage} />
								</div>
							)}

							<p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>

							<Link to={`/teach/${service.type}`}>
								<button className="text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform cursor-pointer">
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
