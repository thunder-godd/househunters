import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className="mx-auto min-h-screen min-w-full bg-dark text-white">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
