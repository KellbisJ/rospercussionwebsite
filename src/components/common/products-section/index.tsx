import type { ProductsExample } from '../teaching-services/types';

const ProductsSection = (): React.JSX.Element => {
	const productsExample: ProductsExample[] = [
		{
			title: 'Congas',
			description: 'Learn percussionism using congas, a tool used in this case.',
			productImage: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Congas.JPG',
			cost: 30,
		},
		{
			title: 'Congas',
			description: 'Learn percussionism using congas, a tool used in this case.',
			productImage: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Congas.JPG',
			cost: 30,
		},
		{
			title: 'Congas',
			description: 'Learn percussionism using congas, a tool used in this case.',
			productImage: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Congas.JPG',
			cost: 30,
		},
		{
			title: 'Congas',
			description: 'Learn percussionism using congas, a tool used in this case.',
			productImage: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Congas.JPG',
			cost: 30,
		},
	];
	return (
		<section id="productsSection" className="p-2 m-2 my-8 md:mx-40 text-black">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl text-center font-bold text-gray-900 mb-4">Products I offer</h2>
				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 my-16">
					{productsExample.map((product, index) => (
						<article
							key={index}
							className="bg-white shadow-md border border-gray-200 rounded-[10px] max-w-sm mx-auto dark:bg-gray-800 dark:border-gray-700">
							<div className="w-full aspect-video overflow-hidden">
								<img
									className="rounded-t-lg w-full h-full object-cover"
									src={`${product.productImage}`}
									alt={product.title}
								/>
							</div>

							<div className="p-5">
								<a href="#">
									<h3 className="dark:text-white text-2xl font-bold text-gray-900 mb-4">
										{product.title}
									</h3>
								</a>
								<p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
									{product.description}
								</p>
								<a
									href="#"
									className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									Read more
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export { ProductsSection };
