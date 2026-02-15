const AboutSection = (): React.JSX.Element => {
	return (
		<section id="about" className="bg-gray-800/20 text-gray-50 p-8 py-16 my-4">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-8 text-shadow-2xs">My Musical Journey</h2>

				{/* Personal Story */}
				<div className="space-y-6 text-lg leading-relaxed">
					<p className="italic text-blue-200">
						"Since I was a kid, my love for music was there and still is."
					</p>

					<p>
						My first experience with the music, was like discover a new language, it helped me,
						amplying my life's perspective. That spark felt like a big bang inside of me, and it
						converted into a passion that will maintain all my life, and now, I have the privilege
						of share this with others.
					</p>

					{/* Teaching Philosophy */}
					<div className="bg-[#2845D6]/30 p-6 rounded-lg mt-6">
						<h3 className="text-xl font-semibold mb-4">Why I Teach</h3>
						<p>
							I believe that anyone can learn how to touch an instrument, That's the magic I live
							for.
						</p>
					</div>

					{/* Personal Touch */}
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
