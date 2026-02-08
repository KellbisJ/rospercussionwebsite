import { useEffect } from 'react';
import { useCanvas } from '@/hooks/use-canvas';

const Background = () => {
	const { canvasRef, resizeCanvas, fullScreenCanvas, getContext } = useCanvas();

	useEffect(() => {
		resizeCanvas();
		fullScreenCanvas();
		drawBackground();
	}, []);

	useEffect(() => {
		const handleResize = () => {
			resizeCanvas();
			fullScreenCanvas();
			drawBackground();
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const drawBackground = () => {
		const canvas = canvasRef.current;
		const ctx = getContext();
		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
		gradient.addColorStop(0, '#667eea');
		gradient.addColorStop(1, '#764ba2');

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	};

	return <canvas ref={canvasRef} />;
};

export { Background };
