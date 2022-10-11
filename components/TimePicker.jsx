import { useState } from "react";
import Btn from "./Btn";
const TimePicker = () => {
	const [time, setTime] = useState(["08:30", "14:00", "16:20"]);
	const handleClick = (e) => {
		console.log(e.target.textContent);
	};
	return (
		<div className="p-3 text-center">
			<h6>Pick a Time</h6>
			{time.map((t) => {
				return (
					<button
						onClick={(e) => handleClick(e)}
						className="py-7 px-3 m-1 border border-orange rounded-md text-orange  hover:bg-orange hover:text-dark ">
						{t}
					</button>
				);
			})}
			<Btn variant="pri">Submit</Btn>
		</div>
	);
};

export default TimePicker;