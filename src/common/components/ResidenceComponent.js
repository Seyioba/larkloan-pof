import {
  Box,
  Stack,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import sideImage from "../images/Frame 47417.png";
import logo from "../images/logo-sm.png";
import { styles } from "../styles";

import Footer from "./Footer";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { red } from "@mui/material/colors";

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// // import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export const Residence = () => {
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
                // height: "100vh",
                // backgroundImage: "url('../images/logo-sm.png')",
                // backgroundColor: "yellow"
              },
            }}
          >
            <Grid
              item
              pl={2}
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
                  fontSize: 40,
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                  letterSpacing: -1,
                  lineHeight: "60px",
                }}
              >
                Affordable Financing <br />
                For Nigerian
                <br />
                Businesses.
              </Typography>
              <br />
              <Typography
                sx={{
                  fontSize: 16,
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                  letterSpacing: 0,
                  lineHeight: "27.2px",
                }}
                // color="text.secondary"
              >
                Get the financial support you need to bring your business
                <br />
                dreams to life. With our simple application process and fast
                <br />
                approvals, you can start building your future today.
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
                <Grid item xs={9}>
                  <Box
                    sx={{
                      background: "white",
                      borderRadius: 2,
                      py: 4,
                      px: 4,
                      // maxWidth: "448px",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", textAlign: "center", pb: 1 }}
                    >
                      Residence
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        textAlign: "center",
                        pb: 2,
                        fontSize: 12,
                      }}
                    >
                      Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet.
                      Lorem Ipsum Dolor
                    </Typography>

                    <Grid
                      container
                      direction={"column"}
                      spacing={3}
                      component="form"
                      pt={1}
                    >
                      <Grid item>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, fontSize: "10px" }}
                        >
                          Residential Address
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="26, Adeyemo close, off Alake Street"
                          sx={styles.textField}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, fontSize: "10px" }}
                        >
                          City
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Ojota"
                          sx={styles.textField}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, fontSize: "10px" }}
                        >
                          State
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="Lagos"
                          sx={styles.textField}
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, fontSize: "10px" }}
                        >
                          Utility Bill
                        </Typography>
                        <TextField
                          variant="outlined"
                          fullWidth
                          placeholder="e.g. 0801 234 5678"
                          sx={styles.textField}
                        />
                      </Grid>

                      <Grid
                        container
                        item
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        // sx={{ minHeight: "100vh" }}
                      >
                        <Grid item sx={{ justifySelf: "center" }}>
                          {/* <Stack> */}
                          <Button
                            variant="contained"
                            sx={{
                              width: "48px",
                              height: "48px",
                              color: "white",
                              backgroundColor: "#9A9FBF",
                            }}
                          >
                            <ArrowBackIcon />
                          </Button>
                          {/* <Button variant="contained" sx={{ marginLeft: "10px", height:"48px", width: "341px",  }}>
													Next
												</Button> */}
                          {/* </Stack> */}
                        </Grid>
                      </Grid>
                    </Grid>

                    {/* <Box component="form"></Box> */}
                  </Box>
                </Grid>
              </Grid>
              <br />
              {/* <Typography sx={{ color: "white" }}>Some Text Here</Typography> */}
            </Grid>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
