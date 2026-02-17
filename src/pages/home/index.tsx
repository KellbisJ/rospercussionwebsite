import { HeroSection } from '../../components/common/hero';
import { AboutSection } from '../../components/common/about';
import { ServicesSection } from '../../components/common/teaching-services';
import { SocialMediaSection } from '@/components/common/social-media';

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
