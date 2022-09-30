import { useState } from "react";
import Link from "next/link";
import img0 from "../public/images/img0.jpg";
import img1 from "../public/images/img1.jpg";
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";
import img6 from "../public/images/img6.jpg";
import img7 from "../public/images/img7.jpg";
import nxt from "../public/images/nxt.png";
import prv from "../public/images/prv.png";
import Image from "next/image";
const Listing = () => {
	const [imgs, setImgs] = useState([
		img0,
		img1,
		img2,
		img3,
		img4,
		img5,
		img6,
		img7,
	]);

	const [current, setCurrent] = useState(0);
	const next = () => {
		if (current != imgs.length - 1) setCurrent((state) => state + 1);
		console.log(current);
	};
	const prev = () => {
		if (current != 0) setCurrent((state) => state - 1);
	};

	return (
		<article className="listing grid-item">
			<div className="img-slider">
				<span className="arrow arrow-left" onClick={(e) => prev(e)}>
					<Image src={prv} alt="img" />
				</span>
				<div className="slides">
					<div className="img">
						<Image src={imgs[current]} alt="img" />
					</div>
				</div>
				<span className="arrow arrow-right" onClick={(e) => next(e)}>
					<Image src={nxt} alt="img" layout="responsive" />
				</span>
			</div>
			<div className="details">
				<div className="title">Apartment in Komarock</div>
				<div className="price">16,000ksh</div>
				<div className="rating">70%</div>
				<div className="hunter">
					<span className="avi">|</span>
					<tag>@thunders</tag>
				</div>
				<Link href="/listings/:1">
					<button className="btn cta">BOOK</button>
				</Link>
			</div>
		</article>
	);
};
const Circles = () => {
	return (
		<div className="circles">
			<span className="circle">|</span>
		</div>
	);
};

export default Listing;
