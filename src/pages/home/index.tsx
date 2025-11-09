import { SocialMediaSection } from '@/components/common/social-media';
import { AboutSection } from '../../components/common/about';
import { HeroSection } from '../../components/common/hero';
import { ServicesSection } from '../../components/common/teaching-services';

// import { ProductsSection } from '@/components/common/products-section';

const HomePage = (): React.JSX.Element => {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			{/* <ProductsSection /> */}
			<SocialMediaSection />
		</>
	);
};

export { HomePage };
