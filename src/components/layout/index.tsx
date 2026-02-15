import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';
// import { GridPattern } from '../ui/shadcn-io/grid-pattern';
// import { cn } from '@/lib/utils';
// import { useWindowSize } from '@/hooks/use-window-size';
import { Background } from '../ui/background';

const Layout = (): React.JSX.Element => {
	// const { isMobile } = useWindowSize();
	return (
		<>
			<Background />
			<div className="relative min-h-screen w-full bg-background overflow-hidden">
				<div className="relative z-10 flex flex-col min-h-screen">
					<Header />
					<main className="flex-1">
						<Outlet />
					</main>
					<Footer />
				</div>
			</div>
		</>
	);
};

export { Layout };
