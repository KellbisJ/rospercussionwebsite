const BgPageImage = ({ srcImg }: { srcImg: string }): React.JSX.Element => {
	return (
		<img
			src={srcImg}
			alt="Teacher portrait"
			className="w-full h-full object-cover shadow-2xl shadow-black/25 border border-white/30"
			loading="lazy"
		/>
	);
};

export { BgPageImage };
