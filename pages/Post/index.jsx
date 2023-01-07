import { useState, useEffect } from "react";

import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { db, storage } from "../../utils/firebase";

const Post = () => {
	const [listings, setListings] = useState({});
	const [name, setName] = useState([]);
	const [bedrooms, setBedrooms] = useState([]);
	const [bathrooms, setBathrooms] = useState([]);
	const [price, setPrice] = useState([]);
	const [coverImage, setCoverImage] = useState();
	useEffect(() => {
		const getListings = async () => {
			try {
				const data = await getDocs(collection(db, "listings"));
				setListings(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
				console.log(listings);
			} catch (e) {
				console.error("Error adding document: ", e);
			}
		};
		getListings();
	}, []);
	console.log(listings);
	const changeHandler = (e) => {
		let selected = e.target.files[0];
		const types = ["image/jpeg", "image/jpg"];
		console.log(selected.name);
		if (selected && types.includes(selected.types)) {
			setCoverImage(selected);
		}
		console.log(listing);
	};
	const createListing = async () => {
		try {
			const listingsRef = await addDoc(collection(db, "listings"), {
				name: name,
				bedrooms: bedrooms,
				bathrooms: bathrooms,
				price: price,
			});
			console.log("Document written with ID: ", listingsRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	const updateListing = async () => {
		try {
			console.log("updating Listing");
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	};

	return (
		<div>
			<form>
				<div>
					<input
						type="text"
						placeholder="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="bedrooms"
						onChange={(e) => setBedrooms(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="bathrooms"
						onChange={(e) => setBathrooms(e.target.value)}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="price"
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div>
					<label>Cover Image</label>

					<input type="file" onChange={(e) => changeHandler(e)} />
				</div>
				<button
					onClick={(e) => {
						e.preventDefault();
						createListing();
					}}>
					Create
				</button>
			</form>
			<div></div>
		</div>
	);
};

export default Post;
