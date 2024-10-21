import { LocationMarkerIcon, PhoneIcon, MailIcon } from '@heroicons/react/solid';

const ContactFooterMenu = () => (
	<div data-aos="fade-up" data-aos-delay={500} data-aos-duration="1000" className="max-w-xs space-y-2">
		<h3 className="text-white font-akira"> Contact </h3>
		<div className="flex space-x-2 text-xs text-white cursor-pointer font-inter group">
			<LocationMarkerIcon className="w-4 h-4 transition group-hover:text-yellow-500" />
			<p>Vidyanagari, Nandivali Village, Shri Malang Road, Kalyan (E) 421 306</p>
		</div>
		<div className="flex space-x-2 text-xs text-white cursor-pointer font-inter group">
			<PhoneIcon className="w-4 h-4 transition group-hover:text-yellow-500 " />
			<p>022 494 355 75</p>
		</div>
		<div className="flex space-x-2 text-xs text-white cursor-pointer font-inter group">
			<MailIcon className="w-4 h-4 transition group-hover:text-yellow-500" />
			<p>info@aryasports.academy</p>
		</div>
	</div>
);

export default ContactFooterMenu;
