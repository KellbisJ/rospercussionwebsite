import { useState } from 'react';
import type { TeachType } from '@/components/common/teaching-services/types';
import type { TeachInformationDataInterface } from '@/pages/teach/types';
import { ChartBarIcon, CheckFatIcon, SparkleIcon, TimerIcon } from '@phosphor-icons/react/dist/ssr';
import { ContactModal } from '@/components/modals/contact';

const TeachInformationLesson = ({
	teachInfo,
	teachType,
}: {
	teachInfo: TeachInformationDataInterface[];
	teachType: TeachType;
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const lessonData = teachInfo.find((item) => item.teachType === teachType);

	if (!lessonData) {
		return (
			<div className="container mx-auto px-4 py-16 text-center">
				<h2 className="text-2xl font-bold text-red-600">Lesson information not found</h2>
			</div>
		);
	}

	const handleBookSessionClick = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="container mx-auto px-4 py-8 my-12">
			<div className="text-center mb-12">
				<h1 className="text-4xl md:text-5xl font-bold text-gray-50 text-shadow-2xs mb-4">
					{lessonData.title}
				</h1>
				{lessonData.subtitle && (
					<p className="text-xl text-purple-700 font-semibold mb-6">{lessonData.subtitle}</p>
				)}
				<p className="text-lg text-gray-50 max-w-2xl mx-auto">{lessonData.description}</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				{/* Left Column - Content Sections */}
				<div className="space-y-8">
					{/* Session Details */}
					<div className="bg-gray-800/50 rounded-2xl shadow-lg p-6 text-gray-50">
						<h3 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
							Session Details
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-50">
							{lessonData.duration && (
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center">
										<span className="text-xl">
											<TimerIcon />
										</span>
									</div>
									<div>
										<p className="font-semibold ">Duration</p>
										<p>{lessonData.duration}</p>
									</div>
								</div>
							)}
							{lessonData.level && (
								<div className="flex items-center space-x-3">
									<div className="w-10 h-10 bg-purple-700 rounded-lg flex items-center justify-center">
										<span className="text-xl">
											<ChartBarIcon />
										</span>
									</div>
									<div>
										<p className="font-semibold">Level</p>
										<p>{lessonData.level}</p>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Learning Outcomes */}
					<div className="bg-gray-800/50 rounded-2xl shadow-lg p-6 text-gray-50">
						<h3 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
							What You'll Master
						</h3>
						<ul className="space-y-4 text-gray-50">
							{lessonData.learningOutcomes.map((outcome, index) => (
								<li key={index} className="flex items-start space-x-3">
									<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1">
										<CheckFatIcon size={60} color="#7E22CE" weight="fill" />
									</div>
									<span className="text-lg leading-relaxed">{outcome}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Features */}
					{lessonData.features && (
						<div className="bg-gray-800/50 shadow-lg p-6 rounded-2xl text-gray-50">
							<h3 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
								What's Included
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-50">
								{lessonData.features.map((feature, index) => (
									<div
										key={index}
										className="flex items-center space-x-3 p-3 bg-[#2845D6]/30 rounded-lg">
										<div className="w-8 h-8 bg-purple-700 rounded-lg flex items-center justify-center">
											<span>
												<SparkleIcon />
											</span>
										</div>
										<span className=" font-medium">{feature}</span>
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				<div className="space-y-6">
					<div className="sticky top-8 bg-gray-800/50 text-gray-50 rounded-2xl shadow-lg overflow-hidden">
						<div className="aspect-video overflow-hidden">
							{!lessonData.videoUrl && lessonData.imageUrl && (
								<img
									src={lessonData.imageUrl}
									alt={lessonData.title}
									className="w-full h-full object-cover"
								/>
							)}
							{!lessonData.imageUrl && lessonData.videoUrl && (
								<iframe
									className="w-full h-full"
									src={lessonData.videoUrl}
									title="Recording Studio Sessions video player"
									frameBorder="0"
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								/>
							)}
						</div>

						<div className="p-6 bg-linear-to-r from-slate-900 to-purple-900">
							<h4 className="text-xl font-bold mb-2">Ready to Begin?</h4>
							<p className=" mb-4">
								Start your musical transformation with personalized guidance and expert instruction.
							</p>
							<button
								onClick={handleBookSessionClick}
								className="w-full bg-[#2845D6]/30 text-gray-50 font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-300 cursor-pointer">
								Book Your Session
							</button>
						</div>
					</div>

					<div className="bg-gray-800/50 text-gray-50 rounded-2xl shadow-lg p-6">
						<h4 className="text-lg font-bold mb-3">Why Choose This Path?</h4>
						<p className="mb-4">
							Each session is crafted to provide maximum value, combining technical expertise with
							artistic development in a supportive learning environment.
						</p>
						<div className="space-y-2">
							<div className="flex items-center space-x-2 text-gray-300">
								<CheckFatIcon color="#7E22CE" size={18} weight="fill" />
								<span>Personalized attention</span>
							</div>
							<div className="flex items-center space-x-2 text-gray-300">
								<CheckFatIcon color="#7E22CE" size={18} weight="fill" />
								<span>Professional guidance</span>
							</div>
							<div className="flex items-center space-x-2 text-gray-300">
								<CheckFatIcon color="#7E22CE" size={18} weight="fill" />
								<span>Proven results</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ContactModal
				isOpen={isModalOpen}
				onClose={handleCloseModal}
				lessonTitle={lessonData.title}
			/>
		</div>
	);
};

export { TeachInformationLesson };
