import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-top footer text-muted">
      <div className="container">
        &copy; 2025 - Demo - <Link to="/">Home</Link>
      </div>
    </footer>
  );
};

export default Footer;
