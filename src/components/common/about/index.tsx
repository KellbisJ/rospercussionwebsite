const AboutSection = (): React.JSX.Element => {
	const videoSample = {
		videoSrc:
			'https://ik.imagekit.io/137/rportfolio/VID_20260215_103643_244.mp4?updatedAt=1771166471590',
		poster:
			'https://ik.imagekit.io/137/rportfolio/IMG_20250926_114335_367.jpg?updatedAt=1758901557060',
		// description: '.....',
		authorName: '@ros_percussion',
		authorAvatar:
			'https://ik.imagekit.io/137/rportfolio/IMG-20250926-WA0006.jpg?updatedAt=1758901054244',
	};

	const { videoSrc, poster, authorName, authorAvatar } = videoSample;

	return (
		<section id="about" className="bg-gray-800/50 text-gray-50 p-8 py-16 my-4">
			<div className="max-w-3xl mx-auto text-center">
				<div className="text-center mx-auto mb-12">
					<h2 className="text-4xl font-bold mb-8 text-shadow-2xs">Live Event Session</h2>
					<p className="text-lg text-gray-50">
						Take a look at how we handle professional live event sessions.
					</p>
				</div>

				<div className="max-w-3xl mx-auto bg-[#2845D6]/30 rounded-xl overflow-hidden mb-12">
					<div className="flex items-center p-4">
						<img
							src={authorAvatar}
							alt={authorName}
							className="w-8 h-8 rounded-full object-cover"
						/>
						<div className="ml-3">
							<p className="font-medium text-gray-50">{authorName}</p>
						</div>
					</div>

					<div className="relative w-full aspect-video bg-black">
						<video
							src={videoSrc}
							poster={poster}
							controls
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</div>

					{/* <div className="p-4">
						<h3 className="text-xl font-semibold text-gray-50 mb-2">{title}</h3>
						<p className="text-gray-50">{description}</p>
					</div> */}
				</div>

				<div className="space-y-6 text-lg leading-relaxed my-8">
					<h2 className="text-4xl font-bold text-shadow-2xs">My Musical Journey</h2>
					<p className="italic text-white">
						"Since I was a kid, my love for music was there and still is."
					</p>

					<p>
						My first experience with the music, was like discover a new language, it helped me,
						amplying my life's perspective. That spark felt like a big bang inside of me, and it
						converted into a passion that will maintain all my life, and now, I have the privilege
						of share this with others.
					</p>

					<div className="bg-[#2845D6]/30 p-6 rounded-lg mt-6">
						<h3 className="text-xl font-semibold mb-4">Why I Teach</h3>
						<p>
							I believe that anyone can learn how to touch an instrument, That's the magic I live
							for.
						</p>
					</div>

					<div className="mt-6">
						<h3 className="text-xl font-semibold mb-4">Beyond the Classroom</h3>
						<p>
							When I'm not teaching, you'll find me working as a percussionist, giving concerts as
							percussionist, doing colaborations with other musicians, or exploring this world and
							knowing people.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export { AboutSection };
