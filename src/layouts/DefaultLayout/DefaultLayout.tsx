import '../../styles/style.scss';
import Navbar from "../../components/Navbar";
import LeftBar from "../../components/LeftBar";

import { ReactNode } from "react";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="theme-light">
			<Navbar />
			<div style={{ display: "flex" }}>
				<LeftBar />
				<div style={{ flex: 6 }}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
