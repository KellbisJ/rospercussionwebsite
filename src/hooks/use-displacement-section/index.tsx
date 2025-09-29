const useDisplacementToSection = () => {
	const displacementToSection = (
		e: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
		section: HTMLElement | null
	) => {
		e.preventDefault();
		e.stopPropagation();

		if (section) {
			const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
			const offsetPosition = elementPosition;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};
	return { displacementToSection };
};

export { useDisplacementToSection };
