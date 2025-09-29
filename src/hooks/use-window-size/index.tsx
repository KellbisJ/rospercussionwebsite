import { useState, useEffect } from 'react';

const useWindowSize = (breakpoint: number = 768) => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const checkDevice = () => setIsMobile(window.innerWidth <= breakpoint);

		checkDevice();

		const handleResize = () => {
			checkDevice();
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [breakpoint]);

	return { isMobile };
};

export { useWindowSize };
