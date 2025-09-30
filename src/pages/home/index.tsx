import { SocialMediaSection } from '@/components/common/social-media';
import { AboutSection } from '../../components/common/about';
import { HeroSection } from '../../components/common/hero';
import { ServicesSection } from '../../components/common/teaching-services';

const HomePage = (): React.JSX.Element => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<SocialMediaSection />
		</>
	);
};

export { HomePage };
