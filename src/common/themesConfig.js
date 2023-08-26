import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: "#27AE60",
    },
    text: {
      primary: "#808080",
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
