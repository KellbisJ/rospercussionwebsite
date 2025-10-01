const TeachTypeValues = [
	'privateLesson',
	'groupWorkshops',
	'livePerfomances',
	'recordingSessions',
	'masterClasses',
] as const;

type TeachType = (typeof TeachTypeValues)[number];

interface Service {
	title: string;
	description: string;
	teachingImage?: string;
	isHorizontal?: boolean;
	icon?: React.ReactNode;
	type: TeachType;
}

export type { TeachType, Service };
export { TeachTypeValues };
