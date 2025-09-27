import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { PageNotFound } from '../components/page-not-found';

const RoutesApp = () => {
	const routes = useRoutes([
		{
			path: '/',
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'home',
					element: <Home />,
				},
				{
					path: '*',
					element: <PageNotFound />,
				},
			],
		},
	]);
	return routes;
};

export { RoutesApp };
