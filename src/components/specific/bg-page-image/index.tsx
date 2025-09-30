const BgPageImage = ({ srcImg }: { srcImg: string }): React.JSX.Element => {
	return (
		<img
			src={srcImg}
			alt="Teacher portrait"
			className="w-full h-full object-cover"
			loading="lazy"
		/>
	);
};

export { BgPageImage };
