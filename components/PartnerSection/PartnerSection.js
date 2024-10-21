import Section from '../Layout/Section';
const PartnerSection = () => (
	<Section className="min-h-screen">
		<div className="px-6 py-24 lg:px-32 lg:py-32">
			<div className="items-center space-y-6 lg:flex lg:space-y-0 lg:space-x-10">
				<div className="lg:w-1/2">
					<div className="space-y-4">
						<h1 className="text-3xl text-black lg:max-w-md font-akira">
							{' '}
							Its the players with best team that wins.{' '}
						</h1>
						<p className="text-sm lg:max-w-md">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
							suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
							lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
							accumsan lacus vel facilisis.
						</p>
					</div>
				</div>
				<div className="lg:w-1/2">
					<div className="flex flex-wrap justify-center">
						<div className="w-32 h-32 m-2 bg-gray-200 border-2 border-gray-300 rounded-sm shadow-sm bg-opacity-20" />
						<div className="w-32 h-32 m-2 bg-gray-200 border-2 border-gray-300 rounded-sm shadow-sm bg-opacity-20" />
						<div className="w-32 h-32 m-2 bg-gray-200 border-2 border-gray-300 rounded-sm shadow-sm bg-opacity-20" />
						<div className="w-32 h-32 m-2 bg-gray-200 border-2 border-gray-300 rounded-sm shadow-sm bg-opacity-20" />
					</div>
				</div>
			</div>
		</div>
	</Section>
);

export default PartnerSection;
