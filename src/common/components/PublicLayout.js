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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
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
    <>
      <Grid
        sx={{
          display: {
            // xs: "none",
            md: "block",
            minHeight: "100vh",
            backgroundImage: `url(${sideImage}})`,
            // backgroundColor: "yellow"
          },
        }}
      >
        <Grid container>
          <Grid
            item
            xs={false}
            md={4}
            sx={{
              display: {
                xs: "none",
                md: "block",
                position: "relative",
                // height: "100vh",
                // backgroundImage: "url('../images/logo-sm.png')",
                // backgroundColor: "yellow"
              },
            }}
          >
            {/* <Grid
              item
              sx={{
                width: "100%",
                // height:"100%",
                color: "white",
                backgroundColor: "transparent",
                // backgroundImage: `url(${sideImage})`,
                position: "relative",
                // flex: "",
                // bottom: "0",
              }}
            >

            </Grid> */}
            <Grid
              item
              pl={2.5}
              pr={2.5}
              // md={4}
              sx={{
                width: "100%",
                // height:"100%",
                color: "white",
                backgroundColor: "transparent",
                // backgroundImage: `url(${sideImage})`,
                position: "absolute",
                // flex: "",
                bottom: "0",
              }}
            >
              <Typography
                sx={{
                  // color: "primary.main",
                  // fontSize: "30px",
                  fontSize: "3vw",
                  fontStyle: "normal",
                  fontWeight: 800,
                  // lineHeight: "30px",
                  spacing: "30px",
                  letterSpacing: -1,
                  lineHeight: "60px",
                  wordWrap: "breakWord",
                }}
              >
                Affordable Financing For Nigerian Businesses.
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: 16,
                  // fontSize: "1.2vw",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  letterSpacing: -0.5,
                  lineHeight: "27.2px",
                }}
                // color="text.secondary"
              >
                Get the financial support you need to bring your business dreams
                to life. With our simple application process and fast approvals,
                you can start building your future today.
              </Typography>
            </Grid>

            <CardMedia
              sx={{ height: "100%" }}
              image={sideImage}
              title="Image"
            />

            {/* <Box component="img" src={sideImage} width="100%" height="100%" /> */}
          </Grid>

          <Grid
            item
            container
            xs={12}
            md={8}
            sx={{ background: "#000", minHeight: "100vh" }}
          >
            <Grid item xs={0.5} md={3} />
            <Grid item xs={11} md={6}>
              <Grid container direction="column" spacing={4}>
                <Grid item xs={3} pl={8} pr={8}>
                  <Box display="flex" justifyContent="center" pt={2}>
                    <Box component="img" src={logo} pr={1} />
                    <Typography
                      sx={{
                        color: "primary.main",
                        fontSize: 27,
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "normal",
                        letterSpacing: -1,
                      }}
                    >
                      Lark
                    </Typography>
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: 27,
                        fontStyle: "normal",
                        fontWeight: 800,
                        lineHeight: "normal",
                        letterSpacing: -1,
                      }}
                    >
                      loan
                    </Typography>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={9}
                  sx={{ maxHeight: "2000px", minHeight: "640px" }}
                >
                  {children}
                </Grid>
              </Grid>
              <br />
              {/* <Typography sx={{ color: "white" }}>Some Text Here</Typography> */}
            </Grid>
            <Grid container item xs={11} md={6}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
