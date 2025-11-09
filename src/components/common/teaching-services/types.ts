const TeachTypeValues = [
	'privateLesson',
	'groupWorkshops',
	'livePerformances',
	'recordingSessions',
	// 'masterClasses',
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
interface ProductsExample {
	title: string;
	description: string;
	productImage: string;
	cost: number;
}

export type { TeachType, Service, ProductsExample };
export { TeachTypeValues };
