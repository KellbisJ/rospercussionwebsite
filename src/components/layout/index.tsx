import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';
import { GridPattern } from '../ui/shadcn-io/grid-pattern';
import { cn } from '@/lib/utils';

const Layout = (): React.JSX.Element => {
	return (
		<div className="relative min-h-screen w-full bg-background">
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
					'[mask-image:radial-gradient(1400px_circle_at_center,white,transparent)]',
					'absolute inset-0 h-full w-full skew-y-12'
				)}
			/>

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

// in the center approach

// const Layout = (): React.JSX.Element => {
// 	return (
// 		<div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden border bg-background">
// 			<GridPattern
// 				width={40}
// 				height={40}
// 				x={-1}
// 				y={-1}
// 				squares={[
// 					[4, 4],
// 					[5, 1],
// 					[8, 2],
// 					[5, 3],
// 					[5, 5],
// 					[10, 10],
// 					[12, 15],
// 					[15, 10],
// 					[10, 15],
// 					[15, 10],
// 					[10, 15],
// 					[15, 10],
// 				]}
// 				className={cn(
// 					'[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
// 					'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
// 				)}
// 			/>

// 			{/* Content wrapper with proper z-index */}
// 			<div className="relative z-10 w-full">
// 				<Header />
// 				<main className="min-h-screen">
// 					<Outlet />
// 				</main>
// 				<Footer />
// 			</div>
// 		</div>
// 	);
// };

export { Layout };
