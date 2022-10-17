import { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { color } from "@mui/system";
const MyDatePicker = () => {
	const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));

	const handleChange = (newValue) => {
		setValue(newValue);
		console.log(newValue);
	};
	return (
		<div className="mt-3 mx-auto text-center text-orange">
			<h6 className="my-2">Date</h6>

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
		</div>
	);
};

export default MyDatePicker;
