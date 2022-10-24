import { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { color } from "@mui/system";
const MyDatePicker = ({ getDate }) => {
	const [value, setValue] = useState(dayjs("2022-12-18T21:11:54"));
	// const [dates, setDates] = useState(["1", "2", "3"]);
	const handleChange = (newValue) => {
		setValue(newValue);
		getDate(newValue);
		console.log(newValue);
	};
	return (
		<div className="mt-3 mx-auto text-center text-orange">
			<h6 className="my-2">Date</h6>
			<div className="p-3 text-center">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker
						inputFormat="MM/DD/YYYY"
						value={value}
						onChange={handleChange}
						InputProps={{
							sx: {
								color: "orange",
								bgColor: "#1E1E1E",
								outline: "none",
								border: "1px solid orange",
							},
						}}
						PaperProps={{
							sx: {
								color: "orange",
								bgColor: "#1E1E1E",
							},
						}}
						PopperProps={{
							sx: {
								color: "orange",
								bgColor: "#1E1E1E",
							},
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				{/* <h6 className="text-orange">Date</h6>
				{dates.map((t) => {
					return (
						<button
							onClick={(e) => getDate(e.target.textContent)}
							className="py-7 px-3 m-1 border border-orange rounded-md text-orange  hover:bg-orange hover:text-dark ">
							{t}
						</button>
					);
				})} */}
			</div>
		</div>
	);
};

export default MyDatePicker;
