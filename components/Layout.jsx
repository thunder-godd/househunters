import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className="Layout mx-auto min-h-screen min-w-full bg-black text-white">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
