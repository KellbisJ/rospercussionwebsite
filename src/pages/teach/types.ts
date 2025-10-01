import type { TeachType } from '@/components/common/teaching-services/types';

interface TeachInformationDataInterface {
	teachType: TeachType;
	title: string;
	description: string;
	subtitle?: string;
	learningOutcomes: string[];
	imageUrl?: string;
	features?: string[];
	duration?: string;
	level?: string;
}

export type { TeachInformationDataInterface };
