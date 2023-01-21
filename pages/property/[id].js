import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img0 from "../../public/images/img0.jpg";
import img1 from "../../public/images/img1.jpg";
import img2 from "../../public/images/img2.jpg";
import img3 from "../../public/images/img3.jpg";
import img4 from "../../public/images/img4.jpg";
import img5 from "../../public/images/img5.jpg";
import img6 from "../../public/images/img6.jpg";
import img7 from "../../public/images/img7.jpg";
import shr from "../../public/images/share.png";
import sav from "../../public/images/save.png";
import Slider from "../../components/Slider";
import Surface from "../../components/Surface";
import Btn from "../../components/Btn";
import Modal from "../../components/Modal";
const Property = () => {
	const [showModal, setShowModal] = useState(false);
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
	const [loggedIn, setLoggedIn] = useState(false);
	const handleClick = (e) => {
		setShowModal(true);

		console.log(e);
		!loggedIn ? setLoggedIn(true) : console.log("logged in");
		//handle auth
		console.log(loggedIn);
		//render Modal
	};
	return (
		<main>
			<Slider imgs={imgs} />
			<section>
				<Surface>
					<div>2 Bedroom Massionette Komarock</div>
					<div>Komarock Phase 5A</div>
					<div>KSH 40,000</div>
					<div>
						<div>2 Beds</div>
						<div>2 Baths</div>
						<div>
							1500 m <sup>2</sup>
						</div>
					</div>
				</Surface>
				<Surface>
					<div>
						<div>Lifts</div>
						<div>Running Water</div>
						<div>Parking</div>
					</div>
				</Surface>
				<Surface>
					<h4>Description</h4>
					<div>
						This single-family home is located at 1918 102nd Ave, Oakland, CA.
						1918 102nd Ave is in the Iveywood neighborhood in Oakland, CA and in
						ZIP code 94603. It is currently for sale and was just listed on
						Trulia today. This property is listed for $399,998. This property
						has 2 bedrooms, 1 bathroom and approximately 420 sqft of floor
						space. This property has a lot size of 3424 sqft and was built in
						1924.
					</div>
				</Surface>
			</section>
			<section className="absolute border top-[94%] right-[20%]">
				<div>
					<p>Schedule A Tour As Early as</p>
					<p>Today at 11 Am</p>
				</div>
				<div className="flex my-2 mx-3">
					<span className="w-5 h-5 ">
						<Image src={shr} alt="share" />
					</span>

					<Btn variant="pri" size="sm">
						<button onClick={(e) => handleClick(e)}>Schedule Tour</button>
					</Btn>
					<span className="w-5 h-5 ">
						<Image src={sav} alt="share" />
					</span>
				</div>
			</section>
			<section>This is a map</section>
			<section>Similar Properties</section>
			<div className="">
				{showModal && <Modal setShowModal={setShowModal} />}
			</div>
		</main>
	);
};

export default Property;
