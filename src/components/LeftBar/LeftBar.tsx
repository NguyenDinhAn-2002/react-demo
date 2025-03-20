import { useEffect } from "react";
import User from "./User";
import "./LeftBar.scss";



const LeftBar = () => {

	useEffect(() => {
		// Call Api
		
	})

	return (
		<div className="leftBar">
			<div className="container">
				<div className="item">
					<span>Suggestions For You</span>
					<User follow={false} online={true} />
					<User follow={false} online={false} />
				</div>
				<div className="item">
					<span>Accounts Follower</span>
					<User follow={true} online={false} />
					<User follow={true} online={true} />
					<User follow={true} online={true} />
					<User follow={true} online={false} />
					<User follow={true} online={true} />
				</div>
			</div>
		</div>
	);
};

export default LeftBar;
