interface UseCanvasReturn {
	canvasRef: React.RefObject<HTMLCanvasElement | null>;
	getCanvas: () => HTMLCanvasElement | null;
	getContext: () => CanvasRenderingContext2D | null;
	resizeCanvas: () => void;
	fullScreenCanvas: () => void;
}
export type { UseCanvasReturn };
