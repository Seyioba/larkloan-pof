import sideImage from "./images/Frame 47417.png";

export const styles = {
	textField: {
		backgroundColor: "#9A9FBF1A",
		color: "#9A9FBF",
		border: "none",
		"& fieldset": { border: "none" },
		// height:"60px",
		borderRadius: "8px",
		fontWeight: 600,
		fontSize: "10px",
	},
	datePicker: {
		backgroundColor: "rgba(154, 159, 191, 0.10)",
		border: "none",
		"& fieldset": { border: "none" },
		// height:"60px",
		borderRadius: "8px",
	},
	background: {
		backgroundImage: `url(${sideImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		minHeight: "100vh",
	},
};
