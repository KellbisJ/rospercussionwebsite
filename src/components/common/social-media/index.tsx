// import { InstagramLogoIcon, YoutubeLogoIcon, SpotifyLogoIcon } from '@phosphor-icons/react/ssr';

const SocialMediaSection = (): React.JSX.Element => {
	return (
		<section className="bg-gradient-to-br from-slate-900 to-purple-900 text-white py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
				<p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
					Check out my self-taught journey and career, follow me on these platforms.
				</p>

				{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto"></div> */}

				<div className="grid grid-cols-1 gap-6 max-w-44 mx-auto">
					<a
						href="https://www.instagram.com/ros_percussion"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group flex flex-col items-center text-center">
						<div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
							<img
								src="https://ik.imagekit.io/137/rportfolio/IMG-20250926-WA0006.jpg?updatedAt=1758901054244"
								alt="Profile"
								className="w-full h-full object-cover"
							/>
						</div>
						<h3 className="text-xl font-semibold mb-2">@ros_percussion</h3>
						<span className="text-xs opacity-75 mt-2 block">Send me a DM on instagram!</span>
					</a>

					{/* <a
						href="https://youtube.com/example"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-red-600 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group">
						<div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
							<YoutubeLogoIcon weight="fill" size={32} />
						</div>
						<h3 className="text-xl font-semibold mb-2">YouTube</h3>
						<p className="text-sm opacity-90">example</p>
						<span className="text-xs opacity-75 mt-4 block">example</span>
					</a>

					<a
						href="https://spotify.com/johndoe"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-green-600 rounded-2xl p-8 hover:scale-105 transition-transform duration-300 group">
						<div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
							<SpotifyLogoIcon weight="fill" size={32} />
						</div>
						<h3 className="text-xl font-semibold mb-2">Spotify</h3>
						<p className="text-sm opacity-90">My music & playlists</p>
						<span className="text-xs opacity-75 mt-4 block">example</span>
					</a> */}

					{/* <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
						<div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
							<EnvelopeIcon weight="fill" size={32} className="text-blue-400" />
						</div>
						<h3 className="text-xl font-semibold mb-2">Newsletter</h3>
						<p className="text-sm opacity-90 mb-4">Weekly music insights</p>
						<form className="space-y-3">
							<input
								type="email"
								placeholder="Your email"
								className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 text-sm"
							/>
							<button
								type="submit"
								className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition-colors">
								Subscribe
							</button>
						</form>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export { SocialMediaSection };
