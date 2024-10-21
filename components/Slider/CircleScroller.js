import Link from 'next/link';

/**
 * IMPORTANT: The parent MUST be relative in position for this to work correctly!
 * Only Call This from Relatively Positioned Parent.
 * @returns Returns an absolutely placed circle scoller.
 * by: Tanishq Sharma
 */

const CircleScroller = () => (
	<div className="absolute z-20 flex items-center justify-center w-full -bottom-10">
		<Link className="cursor-pointer" href="/#main">
			<div className="relative flex items-center justify-center w-20 h-20 m-auto bg-black rounded-full">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="w-6 h-6 text-white animate-bounce"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
				</svg>
			</div>
		</Link>
	</div>
);

export default CircleScroller;
