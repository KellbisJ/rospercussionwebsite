import { useParams } from 'react-router-dom';
import { TeachInformationLesson } from '@/components/specific/teach-information-lesson';
import { isTeachType } from '@/utils/is-teach-type';
import { TEACH_INFO_DATA } from './teachInformationData';

const TeachPage = (): React.JSX.Element => {
	const { type } = useParams();

	window.scroll({ top: 0 });

	if (isTeachType(type)) {
		return (
			<>
				<TeachInformationLesson teachInfo={TEACH_INFO_DATA} teachType={type} />
			</>
		);
	} else {
		return (
			<>
				<h2 className="text-red-400">lalalala</h2>
			</>
		);
	}
};

export { TeachPage };
