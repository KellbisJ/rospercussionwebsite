import { useRoutes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { PageNotFound } from '../components/common/page-not-found';
import { Layout } from '../components/layout';
import { TeachPage } from '@/pages/teach';

const RoutesApp = () => {
	const routes = useRoutes([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: 'home',
					element: <HomePage />,
				},
				{
					path: 'teach/:type',
					element: <TeachPage />,
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
