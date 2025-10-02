import { XIcon, EnvelopeSimpleIcon, InstagramLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { useEffect } from 'react';

const ContactModal = ({
	isOpen,
	onClose,
	lessonTitle,
}: {
	isOpen: boolean;
	onClose: () => void;
	lessonTitle: string;
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleEmailClick = () => {
		const subject = `Booking Inquiry: ${lessonTitle}`;
		const body = `Hello! I'm interested in booking a session for: ${lessonTitle}. Please provide me with more information about availability and pricing.`;
		window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
	};

	const handleInstagramClick = () => {
		window.open('https://instagram.com/your-instagram-handle', '_blank');
	};

	return (
		<div
			className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
			onClick={handleBackdropClick}>
			<div className="bg-white rounded-2xl shadow-xl max-w-md w-full relative animate-in fade-in-90 zoom-in-90 duration-200">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200">
					<XIcon size={24} />
				</button>

				<div className="p-6">
					<h3 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h3>
					<p className="text-gray-600 mb-6">
						Choose your preferred way to contact me about{' '}
						<span className="font-semibold text-indigo-600">{lessonTitle}</span>
					</p>

					<div className="space-y-4">
						<button
							onClick={handleEmailClick}
							className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-3">
							<EnvelopeSimpleIcon size={20} />
							<span>Send Email</span>
						</button>

						<button
							onClick={handleInstagramClick}
							className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-200 flex items-center justify-center space-x-3">
							<InstagramLogoIcon size={20} />
							<span>Send DM on Instagram</span>
						</button>
					</div>

					<p className="text-sm text-gray-500 mt-6 text-center">
						I'll get back to you as soon as possible to discuss your session!
					</p>
				</div>
			</div>
		</div>
	);
};

export { ContactModal };
