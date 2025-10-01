// TeachInformationLesson.tsx
import type { TeachType } from '@/components/common/teaching-services/types';
import type { TeachInformationDataInterface } from '@/pages/teach/types';
import {
	ChartBarIcon,
	CheckCircleIcon,
	SparkleIcon,
	TimerIcon,
} from '@phosphor-icons/react/dist/ssr';

const TeachInformationLesson = ({
	teachInfo,
	teachType,
}: {
	teachInfo: TeachInformationDataInterface[];
	teachType: TeachType;
}) => {
	const lessonData = teachInfo.find((item) => item.teachType === teachType);

	if (!lessonData) {
		return (
			<div className="container mx-auto px-4 py-16 text-center">
				<h2 className="text-2xl font-bold text-red-600">Lesson information not found</h2>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{lessonData.title}</h1>
				{lessonData.subtitle && (
					<p className="text-xl text-indigo-600 font-semibold mb-6">{lessonData.subtitle}</p>
				)}
				<p className="text-lg text-gray-600 max-w-2xl mx-auto">{lessonData.description}</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				<div className="space-y-8">
					<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
							Session Details
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{lessonData.duration && (
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
										<span className="text-indigo-600">
											<TimerIcon />
										</span>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Duration</p>
										<p className="text-gray-600">{lessonData.duration}</p>
									</div>
								</div>
							)}
							{lessonData.level && (
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
										<span className="text-green-600">
											<ChartBarIcon />
										</span>
									</div>
									<div>
										<p className="font-semibold text-gray-900">Level</p>
										<p className="text-gray-600">{lessonData.level}</p>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
							What You'll Master
						</h3>
						<ul className="space-y-4">
							{lessonData.learningOutcomes.map((outcome, index) => (
								<li key={index} className="flex items-start space-x-3">
									<div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
										<CheckCircleIcon size={60} color="#22ecd1" weight="fill" />
									</div>
									<span className="text-gray-700 text-lg leading-relaxed">{outcome}</span>
								</li>
							))}
						</ul>
					</div>

					{lessonData.features && (
						<div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
							<h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
								What's Included
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{lessonData.features.map((feature, index) => (
									<div
										key={index}
										className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
										<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
											<span className="text-blue-600">
												<SparkleIcon color="#ebe40f" />
											</span>
										</div>
										<span className="text-gray-700 font-medium">{feature}</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				<div className="sticky top-8">
					<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
						{lessonData.imageUrl && (
							<img
								src={lessonData.imageUrl}
								alt={lessonData.title}
								className="w-full h-64 md:h-80 object-contain aspect-square"
							/>
						)}

						<div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
							<h4 className="text-xl font-bold mb-2">Ready to Begin?</h4>
							<p className="text-indigo-100 mb-4">
								Start your musical transformation with personalized guidance and expert instruction.
							</p>
							<button className="w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
								Book Your Session
							</button>
						</div>
					</div>

					<div className="mt-6 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
						<h4 className="text-lg font-bold text-gray-900 mb-3">Why Choose This Path?</h4>
						<p className="text-gray-600 mb-4">
							Each session is crafted to provide maximum value, combining technical expertise with
							artistic development in a supportive learning environment.
						</p>
						<div className="flex items-center space-x-2 text-gray-500">
							<span>
								<CheckCircleIcon color="#18e24a" size={18} />
							</span>
							<span>Personalized attention</span>
						</div>
						<div className="flex items-center space-x-2 text-gray-500 mt-2">
							<CheckCircleIcon color="#18e24a" size={18} />
							<span>Professional guidance</span>
						</div>
						<div className="flex items-center space-x-2 text-gray-500 mt-2">
							<CheckCircleIcon color="#18e24a" size={18} />
							<span>Proven results</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { TeachInformationLesson };
