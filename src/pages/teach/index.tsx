import { useLocation, useParams } from 'react-router-dom';

const TeachPage = (): React.JSX.Element => {
	const { type } = useParams();
	const location = useLocation();

	const lessonTypeParam = type as string;

	const expectedTypesUrlParams: string[] = [
		'privateLesson',
		'groupWorkshops',
		'onlineCourses',
		'livePerfomances',
		'recordingSessions',
		'masterClasses',
	];

	const expectedUrl = expectedTypesUrlParams.some((path) => lessonTypeParam.includes(path));

	console.log(type);
	console.log(location);

	if (lessonTypeParam && expectedUrl) {
		return (
			<>
				<h2 className="text-red-400">saiodasjfoisf</h2>
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
