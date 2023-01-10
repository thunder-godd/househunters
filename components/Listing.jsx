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
import shr from "../public/images/share.png";
import sav from "../public/images/save.png";

import Image from "next/image";
import Slider from "./Slider";
import Surface from "./Surface";
import Btn from "./Btn";

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

	return (
		<Link href="/property/1">
		<article className="m-3">
			
			<Slider imgs={imgs} />
			<Surface>
				<div className="details">
					<div className="flex justify-between">
						<div className="title">Apartment in Komarock</div>
						<div className="price">Ksh16,000 </div>
					</div>
					<div className=" flex justify-between">
						Bedrooms<span>5</span>
					</div>

					<div className="rating flex justify-between">
						Rating<span>95%</span>
					</div>
					{/* <div className="hunter">
						<span className="avi">|</span>
						<tag>@thunders</tag>
					</div> */}
					<div className=" flex my-2 mx-3">
						<span className="w-5 h-5 ">
							<Image src={shr} alt="share" />
						</span>
						<Btn variant="pri" size="sm">
							<Link href="/property/:1">BOOK</Link>
						</Btn>
						<span className="w-5 h-5 ">
							<Image src={sav} alt="share" />
						</span>
					</div>
				</div>
			</Surface>
			
		</article>
		</Link>
	);
};

export default Listing;
