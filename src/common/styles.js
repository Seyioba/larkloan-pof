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
    maxHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputFile: {
    backgroundColor: "#9A9FBF1A",
    color: "#9A9FBF",
    border: "none",
    "& fieldset": { border: "none" },
    // height:"60px",
    borderRadius: "8px",
    fontWeight: 600,
    fontSize: "10px",
    maxHeight: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    display: "none",
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
  footer: {
    color: "white",
    fontWeight: 600,
    fontSize: "14px",
    fontFamily: "Plus Jakarta Sans",
    paddingLeft: "10px",
    // position: "absolute",
    // bottom: 0,
  },
};
