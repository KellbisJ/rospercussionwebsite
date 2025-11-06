const BgPageImage = ({ srcImg }: { srcImg: string }): React.JSX.Element => {
	return (
		<img
			src={srcImg}
			alt="Teacher portrait"
			className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
			loading="lazy"
			onLoad={(e) => (e.currentTarget.style.opacity = '1')}
		/>
	);
};

export { BgPageImage };
