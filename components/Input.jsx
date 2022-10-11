const Input = ({ placeholder }) => {
	return (
		<div className="border border-dark border-b-orange mt-3 rounded-t-sm ">
			<input
				className="bg-dark p-1 outline-none"
				type="text"
				placeholder={placeholder}
			/>
		</div>
	);
};

export default Input;
