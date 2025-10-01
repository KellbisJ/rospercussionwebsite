import type { TeachInformationDataInterface } from './types';
import { TeachTypeValues } from '@/components/common/teaching-services/types';

const TEACH_INFO_DATA: TeachInformationDataInterface[] = [
	{
		teachType: TeachTypeValues[0], // 'privateLesson'
		title: 'Private Music Lessons',
		subtitle: 'Personalized One-on-One Instruction',
		description:
			'Tailored sessions designed specifically for your musical journey. Get undivided attention and customized guidance to accelerate your growth.',
		duration: 'X-X minutes',
		level: 'All Levels',
		learningOutcomes: [
			'Master fundamental techniques: grip, posture, stroke control',
			'Customize repertoire to match your musical goals',
			'Build solid practice routines and self-assessment habits',
			'Receive on-the-spot feedback for rapid improvement',
		],
		features: [
			'Personalized curriculum',
			'Flexible scheduling',
			'Progress tracking',
			'Performance preparation',
		],
		imageUrl:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114216_151.jpg?updatedAt=1758901557487',
	},
	{
		teachType: TeachTypeValues[1], // 'groupWorkshops'
		title: 'Group Workshops',
		subtitle: 'Collaborative Learning Experience',
		description:
			'Join fellow musicians in dynamic group settings where collaboration fuels growth. Perfect for developing ensemble skills and building musical community.',
		duration: 'X-X hours',
		level: 'Beginner to Intermediate',
		learningOutcomes: [
			'Develop ensemble skills: listening, blending, and timing',
			'Collaborate on rhythms and arrangements with peers',
			'Exchange techniques and constructive feedback',
			'Build community and stage-practice confidence',
		],
		features: [
			'Peer learning environment',
			'Group dynamics training',
			'Network with musicians',
			'Cost-effective option',
		],
		imageUrl: '/images/group-workshops.jpg',
	},
	{
		teachType: TeachTypeValues[2], // 'livePerformances'
		title: 'Live Performance Sessions',
		subtitle: 'Real Stage Experience',
		description:
			'Experience the thrill of live performance in a supportive environment. Learn stage presence, audience connection, and performance psychology.',
		duration: 'Varies by event',
		level: 'Intermediate to Advanced',
		learningOutcomes: [
			'Observe pro-level stage presence and performance flow',
			'Learn dynamic playing through live demonstration',
			'Interact with audience cues and spontaneous improvisation',
			'Gain tips on set composition and show pacing',
		],
		features: [
			'Real audience experience',
			'Professional venue settings',
			'Video recording included',
			'Post-performance analysis',
		],
		imageUrl: '/images/live-performances.jpg',
	},
	{
		teachType: TeachTypeValues[3], // 'recordingSessions'
		title: 'Recording Studio Sessions',
		subtitle: 'Professional Studio Experience',
		description:
			'Step into the world of professional recording. Learn studio etiquette, microphone techniques, and the art of creating perfect takes.',
		duration: 'X-X hours',
		level: 'Intermediate to Advanced',
		learningOutcomes: [
			'Understand microphone techniques and placement',
			'Hone precision timing for studio-grade recordings',
			'Learn overdubbing, layering, and mixing basics',
			'Adopt professional rehearsal and tracking workflows',
		],
		features: [
			'Professional studio equipment',
			'Audio engineer guidance',
			'Take home your recording',
			'Mixing and mastering basics',
		],
		imageUrl: '/images/recording-sessions.jpg',
	},
	{
		teachType: TeachTypeValues[4], // 'masterClasses'
		title: 'Master Classes',
		subtitle: 'Learn from Industry Professionals',
		description:
			'Intensive sessions with accomplished musicians and educators. Gain insights into advanced techniques, career development, and artistic expression.',
		duration: 'X-X hours',
		level: 'Advanced',
		learningOutcomes: [
			'Deep-dive into advanced repertoire and stylistic nuance',
			'Receive personalized critiques from industry pros',
			'Explore niche genres and innovative techniques',
			'Network and get career-level guidance',
		],
		features: [
			'Industry expert instructors',
			'Limited class size',
			'Certificate of completion',
			'Networking opportunities',
		],
		imageUrl: '/images/master-classes.jpg',
	},
];

export { TEACH_INFO_DATA };
