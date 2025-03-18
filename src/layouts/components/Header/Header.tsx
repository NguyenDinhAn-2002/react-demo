import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const Header = () => {
	const { user, logout } = useContext(AuthContext) as { user: { username: string; password: string }; logout: () => void };
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("mockUser");
		logout();
		navigate("/login");
	};

	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
				<div className="container">
					<Link className="navbar-brand" to="/">
						Demo
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target=".navbar-collapse"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
						<ul className="navbar-nav flex-grow-1">
							<li className="nav-item">
								<Link
									className="nav-link text-dark"
									to="/"
								>
									Home
								</Link>
							</li>
						</ul>

						{user.username === "" && user.password === "" ? (
							<ul className="navbar-nav">
								<li className="nav-item mx-2">
									<Link
										className="btn btn-primary"
										to="/login"
									>
										Login
									</Link>
								</li>
								<li className="nav-item">
									<Link
										className="btn btn-danger"
										to="/Register"
									>
										Register
									</Link>
								</li>
							</ul>
						) : (
							<button className="form__submit" onClick={handleLogout}>Đăng xuất</button>
						)}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
