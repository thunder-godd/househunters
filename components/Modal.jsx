import MyDatePicker from "./MyDatePicker";
import TimePicker from "./TimePicker";
import Btn from "./Btn";
import Confirm from "./Confirm";
import { useState } from "react";
const Modal = () => {
	const [showConfirm, setShowConform] = useState(false);
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const getTime = (t) => {
		setTime(t);
		console.log(t);
	};
	const getDate = (d) => {
		setDate(d);
		console.log(d);
	};
	const handleSubmit = () => {
		setShowConform(true);
	};
	return (
		<section className="bg-dark rounded-md absolute top-[20%]  w-[80%] h-[75%] mx-[10%]  z-50  ">
			<div className="my-2 mx-2 mt- text-center">
				Pick a Date and Time to view the property
			</div>
			<div className="max-w-lg mx-auto">
				<div className="my-2">
					<MyDatePicker getDate={getDate} />
				</div>
				<div className="my-2">
					<TimePicker time={time} getTime={getTime} />
				</div>
				<div className="my-4 mx-2 text-center">
					<Btn variant="pri">
						<button onClick={() => handleSubmit()}>Submit</button>
					</Btn>
				</div>
			</div>
			{showConfirm && <Confirm date={date} time={time} />}
		</section>
	);
};

export default Modal;
