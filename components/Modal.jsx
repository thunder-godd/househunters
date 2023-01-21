import MyDatePicker from "./MyDatePicker";
import TimePicker from "./TimePicker";
import Btn from "./Btn";
import Confirm from "./Confirm";
import { useState } from "react";
import Input from "./Input";
const Modal = ({ setShowModal }) => {
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
		<section className="bg-dark rounded-md absolute top-[20%] left-[20%]  w-[60%] h-[75%] border  z-50  ">
			<div
				className="relative right-0 p-2"
				onClick={(e) => setShowModal(false)}>
				X
			</div>
			<div className="my-2 mx-2 mt- text-center">Schedule A Tour</div>

			<div className="max-w-lg mx-auto">
				<div className="my-2">
					<MyDatePicker getDate={getDate} />
				</div>
				<div className="my-2">
					<TimePicker time={time} getTime={getTime} />
				</div>
				<div className="my-2">
					<Input placeholder={"Phone"} />
				</div>
				<div className="my-2">
					<Input placeholder={"Email"} />
				</div>
				<div className="my-4 mx-2 text-center">
					<Btn variant="pri">
						<button onClick={() => handleSubmit()}>Submit</button>
					</Btn>
				</div>
			</div>
		</section>
	);
};

export default Modal;
