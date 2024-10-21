import Section from '../Layout/Section';

const CircleCTA = () => (
	<div data-aos-duration="1000" data-aos="fade-up" data-aos-delay="300" className="relative cursor-pointer group">
		<div className="flex items-center w-32 h-32 transition-all duration-300 rounded-full group-hover:w-72 group-hover:h-32 justify-items-end ring-2 ring-white bg-sports-edited filter grayscale group-hover:grayscale-0" />
		<h1 className="absolute ml-16 -mt-20 text-sm text-white transition-all duration-300 group-hover:-mt-20 group-hover:ml-20 font-akira ">
			{' '}
			Explore Our <br /> Partners{' '}
		</h1>
	</div>
);

const LargeBannerCTA = () => (
	<Section className="min-h-screen m-auto bg-black bg-cover bg-feature-image-1">
		<div className="w-full min-h-screen px-12 py-24 bg-gradient-to-r from-black to-transparent backdrop-filter">
			<div className="max-w-5xl m-auto">
				<div className="space-y-5 lg:w-1/3">
					<h1 data-aos-duration="1000" data-aos="fade-up" className="text-white md:text-xl lg:text-3xl font-akira">
						"who you stand with tells more about you than where you stand
					</h1>
					<p
						data-aos-duration="1000"
						data-aos="fade-up"
						data-aos-delay="300"
						className="text-sm text-white lg:text-base font-montserrat"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
						facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
						facilisis.
					</p>
					<CircleCTA />
				</div>
			</div>
		</div>
	</Section>
);
export default LargeBannerCTA;
