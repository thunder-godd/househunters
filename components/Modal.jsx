import MyDatePicker from "./MyDatePicker";
import TimePicker from "./TimePicker";
import Btn from "./Btn";
import Confirm from "./Confirm";
const Modal = () => {
	return (
		<section className="bg-dark rounded-md absolute top-[20%]  w-[80%] h-[75%] mx-[10%]  z-50  ">
			<div className="my-2 mx-2 mt- text-center">
				Pick a Date and Time to view the property
			</div>
			<div className="max-w-lg mx-auto">
				<div className="my-2">
					<MyDatePicker />
				</div>
				<div className="my-2">
					<TimePicker />
				</div>
				<div className="my-4 mx-2 text-center">
					<Btn variant="pri">
						<button>Submit</button>
					</Btn>
				</div>
			</div>
		</section>
	);
};

export default Modal;
