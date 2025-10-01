import type { TeachType } from '@/components/common/teaching-services/types';
import { TeachTypeValues } from '@/components/common/teaching-services/types';

function isTeachType(value: unknown): value is TeachType {
	return typeof value === 'string' && TeachTypeValues.includes(value as TeachType);
}

export { isTeachType };
