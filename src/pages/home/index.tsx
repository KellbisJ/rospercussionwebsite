import { AboutSection } from '../../components/about';
import { HeroSection } from '../../components/hero';
import { ServicesSection } from '../../components/teaching-services';

const Home = (): React.JSX.Element => {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
		</main>
	);
};

export { Home };
