// ... (import statements and other code)
import {
  Box,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  DateField,
  ListItem,
  Button,
} from "@mui/material";
import React from "react";
import sideImage from "../images/Frame 47417.png";
import logo from "../images/logo-sm.png";
import { styles } from "../styles";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import Footer from "./Footer";

export const PublicLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Grid
        sx={{
          // ... (styles for the background grid)
          display: {
            // xs: "none",
            md: "block",
            minHeight: "100vh",
            backgroundImage: `url(${sideImage}})`,
            // backgroundColor: "yellow"
          },
        }}
      >
        {/* ... (background grid content) */}
      </Grid>

      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={false}
          md={4}
          sx={
            {
              // ... (styles for the left grid)
            }
          }
        >
          <Grid
            item
            pl={2}
            sx={{
              // ... (styles for the text content)

              bottom: 0,
              position: "absolute",
            }}
          >
            {/* ... (text content) */}
          </Grid>
        </Grid>

        {/* ... (right grid content) */}
      </div>
    </div>
  );
};
