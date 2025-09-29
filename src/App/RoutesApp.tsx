import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/home';
import { PageNotFound } from '../components/common/page-not-found';
import { Layout } from '../components/layout';

const RoutesApp = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
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
