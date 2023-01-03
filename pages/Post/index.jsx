import { useState } from "react";
const Post = () => {
	const [listing, setListing] = useState({});
	const changeHandler = (e) => {
		let selected = e.target.files[0];
		const types = ["image/jpeg", "image/jpg"];
		console.log(selected.name);
		if (selected && types.includes(selected.types)) {
			setListing((prev) => {
				prev.cover_image = selected;
			});
		}
		console.log(listing);
	};

	return (
		<div>
			<form>
				<div>
					<label>name</label>
					<input type="text" />
				</div>
				<div>
					<label>bedrooms</label>
					<input type="text" />
				</div>
				<div>
					<label>bathrooms</label>
					<input type="text" />
				</div>
				<div>
					<label>payment period</label>
					<input type="text" />
				</div>
				<div>
					<label>Cover Image</label>

					<input type="file" onChange={(e) => changeHandler(e)} />
				</div>
			</form>
			<div></div>
		</div>
	);
};

export default Post;
