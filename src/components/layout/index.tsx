import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';
import { GridPattern } from '../ui/shadcn-io/grid-pattern';
import { cn } from '@/lib/utils';
import { useWindowSize } from '@/hooks/use-window-size';

const Layout = (): React.JSX.Element => {
	const { isMobile } = useWindowSize();
	return (
		<div className="relative min-h-screen w-full bg-background overflow-hidden">
			{isMobile ? (
				<GridPattern
					width={34}
					height={34}
					x={-1}
					y={-1}
					squares={[
						[4, 4],
						[5, 1],
						[8, 2],
						[5, 3],
						[5, 5],
						[10, 10],
						[12, 15],
						[15, 10],
						[10, 15],
						[15, 10],
						[10, 15],
						[15, 10],
					]}
					className={cn(
						'[mask-image:linear-gradient(to_bottom,white,transparent)]',
						'bg-slate-200 fill-slate-700/30 skew-y-8'
					)}
				/>
			) : (
				<GridPattern
					width={40}
					height={40}
					x={-1}
					y={-1}
					squares={[
						[4, 4],
						[5, 1],
						[8, 2],
						[5, 3],
						[5, 5],
						[10, 10],
						[12, 15],
						[15, 10],
						[10, 15],
						[15, 10],
						[10, 15],
						[15, 10],
					]}
					className={cn(
						'[mask-image:radial-gradient(2000px_circle_at_center,white,transparent)]',
						'bg-slate-200 fill-slate-700/30 skew-y-2'
					)}
				/>
			)}

			<div className="relative z-10 flex flex-col min-h-screen">
				<Header />
				<main className="flex-1">
					<Outlet />
				</main>
				<Footer />
			</div>
		</div>
	);
};

export { Layout };
