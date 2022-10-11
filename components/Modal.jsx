import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker";
const Modal = () => {
	return (
		<section className="bg-dark absolute top-[10%] left-0 min-h-screen min-w-full z-50">
			Modal
			<DatePicker />
			<TimePicker />
		</section>
	);
};

export default Modal;
