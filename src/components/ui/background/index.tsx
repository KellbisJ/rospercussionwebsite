import { useEffect, useRef } from 'react';
import { useCanvas } from '@/hooks/use-canvas';

const Background: React.FC = () => {
	const { canvasRef, resizeCanvas, fullScreenCanvas, getContext } = useCanvas();
	const animationRef = useRef<number | undefined>(undefined);
	const angleRef = useRef<number>(0); // radians

	useEffect(() => {
		// Initial sizing
		fullScreenCanvas();
		resizeCanvas();

		// Animation loop
		const animate = () => {
			const canvas = canvasRef.current;
			const ctx = getContext();
			if (canvas && ctx) {
				draw(ctx, canvas.width, canvas.height);
			}
			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		// Resize handler
		const handleResize = () => {
			fullScreenCanvas();
			resizeCanvas();
		};

		window.addEventListener('resize', handleResize);

		return () => {
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
		ctx.clearRect(0, 0, width, height);

		const centerX = width / 2;
		const centerY = height / 2;
		const diagonal = Math.sqrt(width * width + height * height) / 2;
		const angle = angleRef.current;

		const startX = centerX - Math.cos(angle) * diagonal;
		const startY = centerY - Math.sin(angle) * diagonal;
		const endX = centerX + Math.cos(angle) * diagonal;
		const endY = centerY + Math.sin(angle) * diagonal;

		const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
		// gradient.addColorStop(0, '#D91656');
		// gradient.addColorStop(0.5, '#6F61C0');
		// gradient.addColorStop(1, '#94B3FD');

		gradient.addColorStop(0, '#EEEEEE');
		gradient.addColorStop(0.5, '#FF5B5B');
		gradient.addColorStop(1, '#2845D6');

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, width, height);

		angleRef.current += 0.002;
		// drawHexagonGrid(ctx, width, height);
	};

	// const drawHexagonGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
	// 	const hexRadius = 30;
	// 	const hexWidth = Math.sqrt(3) * hexRadius;
	// 	const hexHeight = 2 * hexRadius;
	// 	const rowHeight = (hexHeight * 3) / 4;
	// 	const halfWidth = hexWidth / 2;

	// 	ctx.lineWidth = 1;
	// 	ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';

	// 	const startRow = Math.floor(-rowHeight / 2 / rowHeight);
	// 	const endRow = Math.ceil((height + rowHeight) / rowHeight);
	// 	const startCol = Math.floor(-halfWidth / hexWidth);
	// 	const endCol = Math.ceil((width + hexWidth) / hexWidth);

	// 	for (let row = startRow; row < endRow; row++) {
	// 		const xOffset = row % 2 === 0 ? 0 : halfWidth;

	// 		for (let col = startCol; col < endCol; col++) {
	// 			const x = col * hexWidth + xOffset;
	// 			const y = row * rowHeight;

	// 			if (
	// 				x + hexRadius < 0 ||
	// 				x - hexRadius > width ||
	// 				y + hexRadius < 0 ||
	// 				y - hexRadius > height
	// 			) {
	// 				continue;
	// 			}

	// 			drawHexagon(ctx, x, y, hexRadius);
	// 		}
	// 	}
	// };

	// const drawHexagon = (ctx: CanvasRenderingContext2D, cx: number, cy: number, radius: number) => {
	// 	ctx.beginPath();
	// 	for (let i = 0; i < 6; i++) {
	// 		const angle = ((i * 60 - 30) * Math.PI) / 180;
	// 		const x = cx + radius * Math.cos(angle);
	// 		const y = cy + radius * Math.sin(angle);
	// 		if (i === 0) {
	// 			ctx.moveTo(x, y);
	// 		} else {
	// 			ctx.lineTo(x, y);
	// 		}
	// 	}
	// 	ctx.closePath();
	// 	ctx.stroke();
	// };

	return <canvas ref={canvasRef} />;
};

export { Background };
