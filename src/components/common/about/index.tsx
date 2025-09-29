const AboutSection = (): React.JSX.Element => {
	return (
		<section id="about" className="bg-slate-800 text-white p-8 py-16 my-4">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">My Musical Journey</h2>

				{/* Personal Story */}
				<div className="space-y-6 text-lg leading-relaxed">
					<p className="italic text-blue-200">
						"Since I was a kid, my love for music was there and still is."
					</p>

					<p>
						My first piano lesson felt like discovering a new language—one that spoke directly to
						the soul. That initial spark grew into a lifelong passion that I'm now privileged to
						share with others.
					</p>

					{/* Teaching Philosophy */}
					<div className="bg-slate-700 p-6 rounded-lg mt-6">
						<h3 className="text-xl font-semibold mb-4">Why I Teach</h3>
						<p>
							I believe that anyone can learn how to touch an instrument. The moment a student plays
							their first melody without looking at the sheet music, that's the magic I live for.
						</p>
					</div>

					{/* Personal Touch */}
					<div className="mt-6">
						<h3 className="text-xl font-semibold mb-4">Beyond the Classroom</h3>
						<p>
							When I'm not teaching, you'll find me working as a repercussionist, exploring vintage
							record stores, or hiking with my guitar, because inspiration can strike anywhere.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export { AboutSection };
