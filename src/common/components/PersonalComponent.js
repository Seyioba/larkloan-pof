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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from "react";
import sideImage from "../images/Frame 47417.png";
import logo from "../images/logo-sm.png";
import { styles } from "../styles";
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

export const Personal = () => {
	return (
		<>
			<Grid
				sx={{
					display: {
						// xs: "none",
						md: "block",
						minHeight: "100vh",
						// backgroundImage: "url('../images/logo-sm.png')",
						// backgroundColor: "yellow"
					},
				}}
			>
				<Grid container>
					<Grid
						container
						item
						xs={false}
						md={4}
						// image={sideImage}
						sx={{
							display: {
								xs: "none",
								md: "block",
								// height: "100vh",
								// backgroundImage: "url('../images/logo-sm.png')",
								// backgroundColor: "yellow",
								backgroundImage: `url(${sideImage})`,
							},
						}}
					>
						<div style={{ backgroundImage: `url(${sideImage})` }}>
							Hello World
						</div>
						{/* <CardMedia
							item
							sx={{ height: "100%" }}
							image={sideImage}
							title="Image"
						/> */}
						{/* <Grid
							sx={{
								position: "absolute",
								bottom: 0,
								left: 0,
								width: "100%",
								padding: "20px",
								backgroundColor: "rgba(0, 0, 0, 0.5)",
								color: "white",
								// textAlign: center,
							}}
						>
							some text
						</Grid> */}
						{/* <CardMedia
							sx={{ height: "100%" }}
							image={sideImage}
							title="Image"
						/> */}

						{/* <Box component="img" src={sideImage} width="100%" height="100%" /> */}
					</Grid>

					<Grid
						item
						container
						xs={12}
						md={8}
						sx={{ background: "#000", minHeight: "100vh" }}
					>
						<Grid item xs={2} />
						<Grid item xs={8}>
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
											Personal
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
													First Name
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													placeholder="e.g. John"
													sx={styles.textField}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													Last Name
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													placeholder="e.g. Doe"
													sx={styles.textField}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													Email Address
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													placeholder="e.g. johndoe@gmail.com"
													sx={styles.textField}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													Phone Number
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													placeholder="e.g. 12345678901"
													sx={styles.textField}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													DOB
												</Typography>
												<LocalizationProvider dateAdapter={AdapterDayjs}>
													<DatePicker sx={styles.datePicker} />
												</LocalizationProvider>
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
												<Button variant="contained" sx={{ width: "48px", height:"48px" }}>
													<ArrowBackIcon/>
												</Button>
												<Button variant="contained" sx={{ marginLeft: "10px", height:"48px", width: "341px" }}>
													Contained
												</Button>
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
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
