import './index.css';
import { BgPageImage } from '../../components/bg-page-image';

const HeroSection = (): React.JSX.Element => {
	return (
		<section className="hero">
			{/* <BgPageImage /> */}
			<img src="https://i.scdn.co/image/ab67616100005174bbda9e6c9742de3129448dfc"></img>
			<div className="text">
				<h1 className="title">Meet John Doe</h1>
				<p className="title">Mastering piano, guitar, and beyond</p>
			</div>
		</section>
	);
};

export { HeroSection };
