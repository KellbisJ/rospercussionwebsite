import { useRef, useEffect, useCallback } from 'react';
import type { UseCanvasReturn } from './types';

const useCanvas = (): UseCanvasReturn => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

	useEffect(() => {
		if (!canvasRef.current) return;
		ctxRef.current = canvasRef.current.getContext('2d');
	}, []);

	const getCanvas = useCallback(() => canvasRef.current, []);

	const getContext = useCallback(() => ctxRef.current, []);

	const resizeCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;

		if (!canvas || !ctx) return;

		const dpr = window.devicePixelRatio || 1;

		const { style } = canvas;
		const displayWidth = Math.floor(canvas.clientWidth * dpr);
		const displayHeight = Math.floor(canvas.clientHeight * dpr);

		if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
			canvas.width = displayWidth;
			canvas.height = displayHeight;

			style.width = `${canvas.clientWidth}px`;
			style.height = `${canvas.clientHeight}px`;

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
	}, []);

	const fullScreenCanvas = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const parent = canvas.parentElement || document.body;

		canvas.style.position = 'fixed';
		canvas.style.width = '100%';
		canvas.style.height = '100%';
		canvas.style.zIndex = '1';

		canvas.width = parent.clientWidth;
		canvas.height = parent.clientHeight;

		const dpr = window.devicePixelRatio || 1;
		canvas.width = parent.clientWidth * dpr;
		canvas.height = parent.clientHeight * dpr;

		const ctx = canvas.getContext('2d');
		if (ctx) {
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		}
	}, []);

	return {
		canvasRef,
		getCanvas,
		getContext,
		resizeCanvas,
		fullScreenCanvas,
	};
};

export { useCanvas };
