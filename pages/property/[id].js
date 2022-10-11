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
		console.log(e);
		!loggedIn ? setLoggedIn(true) : console.log("logged in");
		//handle auth
		console.log(loggedIn);
		//render Modal
	};
	return (
		<main>
			<Slider variant="lg" imgs={imgs} />
			<section>
				<Surface>Details</Surface>
				<Surface>Amenities</Surface>
				<Surface>Description</Surface>
			</section>
			<div className=" flex my-2 mx-3">
				<span className="w-5 h-5 ">
					<Image src={shr} alt="share" />
				</span>
				<Btn variant="pri" size="sm">
					<button onClick={(e) => handleClick(e)}>BOOK</button>
				</Btn>
				<span className="w-5 h-5 ">
					<Image src={sav} alt="share" />
				</span>
			</div>
			{/* <Modal /> */}
			{loggedIn && <Modal />}
		</main>
	);
};

export default Property;
