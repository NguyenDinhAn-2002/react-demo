import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: "10px 0",
        textAlign: "center",
        backgroundColor: "#f1f1f1", // optional: add background color
      }}
    >
      <div>
        &copy; 2025 - Demo - <Link to="/">Home</Link>
      </div>
    </Box>
  );
};

export default Footer;
