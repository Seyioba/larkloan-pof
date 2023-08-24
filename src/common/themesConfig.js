import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#27AE60",
    },
    text: {
      primary: "grey",
      secondary: "black",
    },
    background: {
      default: "#000"
    },
  },
  typography: {
    fontFamily: "Plus Jakarta Sans",
  },
  
});
