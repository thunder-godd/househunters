import Head from "next/head";

import Listings from "../components/Listings";

export default function Home() {
	return (
		<div className="home">
			<Head>
				<title>House Hunters| Home</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<Listings />
			</main>
		</div>
	);
}
