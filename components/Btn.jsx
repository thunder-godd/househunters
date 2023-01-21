const Btn = ({ variant, children }) => {
	return (
		<div
			className={
				variant == "pri"
					? "inline-block bg-orange rounded-md text-black  mx-auto px-3"
					: ""
			}>
			{children}
		</div>
	);
};
// variants, lg , sm , pri, sec
export default Btn;
