const Btn = ({ variant, children }) => {
	return (
		<div
			className={
				variant == "pri" ? "bg-orange rounded-lg text-black  mx-auto px-2" : ""
			}>
			{children}
		</div>
	);
};
// variants, lg , sm , pri, sec
export default Btn;
