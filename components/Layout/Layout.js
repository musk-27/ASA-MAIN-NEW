import 'aos/dist/aos.css'; // You can also use <link> for styles

import Aos from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children, seo }) {
	// Starts the animation library
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<>
			<Head>
				<title>{seo.title}</title>
				<meta name="description" content={seo.description} />
				<link rel="icon" href="/favicon.ico" />
				{/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
				<link
					rel="apple-touch-icon"
					sizes="57x57"
					href="/app-icons/apple-icon-57x57.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="60x60"
					href="/app-icons/apple-icon-60x60.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="72x72"
					href="/app-icons/apple-icon-72x72.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="76x76"
					href="/app-icons/apple-icon-76x76.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="114x114"
					href="/app-icons/apple-icon-114x114.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="120x120"
					href="/app-icons/apple-icon-120x120.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="144x144"
					href="/app-icons/apple-icon-144x144.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="152x152"
					href="/app-icons/apple-icon-152x152.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/app-icons/apple-icon-180x180.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/app-icons/android-icon-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/app-icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="96x96"
					href="/app-icons/favicon-96x96.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/app-icons/favicon-16x16.png"
				/>
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta
					name="msapplication-TileImage"
					content="/app-icons/ms-icon-144x144.png"
				/>
				<meta name="theme-color" content="#000000" />
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;700&display=swap"
					rel="stylesheet"
				/> */}
				{/* <link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
					rel="stylesheet"
				/> */}
			</Head>
			<Header />
			{children}
			<Footer />
		</>
	);
}
