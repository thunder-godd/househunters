import Listing from "./Listing";
import { useState } from "react";

const Listings = () => {
	const [listings, setListings] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22,
		23,
	]);
	return (
		<section className="listings">
			<div className="grid-container">
				{listings.map((l) => (
					<Listing />
				))}
			</div>
		</section>
	);
};

export default Listings;
