/**
 *
 * @returns Full screen slider
 */

import CircleScroller from './CircleScroller';

function Slider({ title, image }) {
	return (
		<div
			data-aos-duration="1000"
			data-aos="fade-in"
			className={`relative bg-black bg-center bg-cover lg:bg-cover ${image}`}
		>
			<CircleScroller />

			<div className="flex justify-center h-full transition duration-300 py-36 md:py-64 cursor-rockon backdrop-grayscale hover:backdrop-filter-none backdrop-filter hover:backdrop-blur-0">
				<div className="space-y-2 text-center">
					<div className="w-1/2 m-auto ">
						<h1
							data-aos-delay="1000"
							data-aos-duration="1000"
							data-aos="fade-in"
							className="text-2xl text-center text-white cursor-default md:text-center lg:text-center md:text-3xl lg:text-5xl font-akira drop-shadow-2xl"
						>
							{title}
						</h1>
					</div>
					<p
						data-aos-delay="2000"
						data-aos-duration="1000"
						data-aos="fade-in"
						className="mx-12 text-sm text-white cursor-default font-montserrat"
					>
						Explore how Arya Sports Academy contributes <br className="hidden lg:block" /> to a child’s 360 degree development
					</p>
					
				</div>
			</div>
		</div>
	);
}
export default Slider;
