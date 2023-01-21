import { useState } from "react";

import nxt from "../public/images/nxt.png";
import prv from "../public/images/prv.png";
import Image from "next/image";
const Slidersm = ({ imgs, variant }) => {
	const [current, setCurrent] = useState(0);
	const next = () => {
		if (current != imgs.length - 1) setCurrent((state) => state + 1);
		console.log(current);
	};
	const prev = () => {
		if (current != 0) setCurrent((state) => state - 1);
	};
	const select = (id) => {
		setCurrent(id);
	};
	return (
		<div className="container  ">
			<div className="slider ">
				<div className="img-slider relative">
					<span
						className="arrow inline-block w-6 absolute left-0 top-[50%] z-10"
						onClick={(e) => prev(e)}>
						<Image src={prv} alt="img" />
					</span>
					<div className="mb-2 ">
						<div className="rounded-lg overflow-hidden min-w-[18rem] max-w-xl max-h-[60%] mx-auto ">
							<Image
								src={imgs[current]}
								alt="img"
								layout="responsive"
								// height={variant == "sm" ? "" : "650px"}
							/>
						</div>
					</div>
					<span
						className="arrow inline-block w-6 absolute top-[50%] right-0 z-10"
						onClick={(e) => next(e)}>
						<Image src={nxt} alt="img" layout="responsive" />
					</span>
				</div>
			</div>
			{variant === "lg" ? <Thumbnails imgs={imgs} select={select} /> : ""}
		</div>
	);
};
const Thumbnails = ({ imgs, select }) => {
	return (
		<div className="flex justify-evenly">
			{imgs.map((img, id) => {
				return (
					<div
						key={id}
						className="img  border h-9 w-9 rounded-[50%] overflow-hidden"
						onClick={() => select(id)}>
						<Image src={img} alt="img" />
					</div>
				);
			})}
		</div>
	);
};
export default Slidersm;
