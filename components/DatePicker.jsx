import { useState } from "react";

const DatePicker = () => {
	const [months, setMonth] = useState([
		{ Jan: 31 },
		{ Feb: 28 },
		{ Mar: 31 },
		{ Apr: 30 },
		{ May: 31 },
		{ Jun: 30 },
		{ Aug: 31 },
		{ Sep: 30 },
		{ Oct: 31 },
		{ Nov: 30 },
		{ Dec: 31 },
	]);

	return (
		<div className="">
			Date Picker
			<Header />
			<Calendar />
		</div>
	);
};
const Header = () => <div className=""> Month Year</div>;
const Calendar = () => {
	const [WeekDays, setWeekDays] = useState([
		"Mo",
		"Tu",
		"We",
		"Th",
		"Fr",
		"Sa",
		"Su",
	]);
	return (
		<div>
			<div>
				{WeekDays.map((d, id) => (
					<span className="inline-block m-1">{d}</span>
				))}
			</div>
			<div>1,2,3,4,5,6,7</div>
			<div>1,2,3,4,5,6,7</div>
			<div>1,2,3,4,5,6,7</div>
		</div>
	);
};
export default DatePicker;
