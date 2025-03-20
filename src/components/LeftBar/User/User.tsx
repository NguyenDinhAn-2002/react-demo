import "../LeftBar.scss";

interface UserProps {
	follow: boolean;
	online: boolean;
}

const User = ({ follow, online }: UserProps) => {
	return (
		<div className="user">
			<div className="userInfo">
				<img
					src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
					alt=""
				/>
				{online && <div className="online" />}
				<span>Jane Doe</span>
			</div>
			{!follow && (
				<div className="buttons">
					<button>follow</button>
				</div>
			)}
		</div>
	);
};

export default User;
