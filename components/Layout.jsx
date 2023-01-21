import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className="mx-auto px-3 min-h-screen max-w-7xl bg-dark text-white">
			<Navbar />
			{children}
		</div>
	);
};

export default Layout;
