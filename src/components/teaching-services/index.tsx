import './index.css';

interface Service {
	title: string;
	description: string;
}

const services: Service[] = [
	{ title: 'Private Lessons', description: 'One-on-one sessions tailored to your level.' },
	{ title: 'Group Workshops', description: 'Interactive workshops for up to 10 students.' },
	{ title: 'Online Courses', description: 'Self-paced video lessons you can access anytime.' },
];

export const ServicesSection = (): React.JSX.Element => {
	return (
		<section className="services">
			<h2>What I Offer</h2>
			<div className="grid">
				{services.map((service) => (
					<div key={service.title} className="card">
						<h3>{service.title}</h3>
						<p>{service.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};
