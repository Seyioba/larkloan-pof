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

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import Footer from "./Footer";

export const PublicLayout = () => {
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
							<Grid item pl={2}
							sx={{
								width: "100%",
								// height:"100%",
								color: "white",
								backgroundColor: "transparent",
								// backgroundImage: `url(${sideImage})`,
								position: "absolute",
								// flex: "",
								bottom: "0",
							}}>
								<Typography
									sx={{
										// color: "primary.main",
										fontSize: 40,
										fontStyle: "normal",
										fontWeight: 800,
										lineHeight: "normal",
										letterSpacing: -1,
										lineHeight: "60px"
									}}
								>
									Affordable Financing <br />
									For Nigerian
									<br />
									Businesses.
								</Typography>
								<br/>
								<Typography
									sx={{ fontSize: 16,
										fontStyle: "normal",
										fontWeight: 600,
										lineHeight: "normal",
										letterSpacing: 0,
										lineHeight: "27.2px" }}
									// color="text.secondary"
								>
									Get the financial support you need to bring your business
									<br />
									dreams to life. With our simple application process and fast<br/>
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
											Create An Account
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

											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													Password
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													type="password"
													// placeholder=""
													sx={styles.textField}
												/>
											</Grid>
											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 500, fontSize: "10px" }}
												>
													<ListItem sx={{ display: "list-item" }}>
														Eight (8) or more alphabetical characters
													</ListItem>
													<ListItem sx={{ display: "list-item" }}>
														one (1) or more uppercase character(s)
													</ListItem>
													<ListItem sx={{ display: "list-item" }}>
														One(1) or more numerical character(s)
													</ListItem>
													<ListItem sx={{ display: "list-item" }}>
														One(1) or more special character(s)
													</ListItem>
												</Typography>
											</Grid>

											<Grid item>
												<Typography
													variant="body1"
													sx={{ fontWeight: 600, fontSize: "10px" }}
												>
													Confirm Password
												</Typography>
												<TextField
													variant="outlined"
													fullWidth
													type="password"
													// placeholder="e.g. 12345678901"
													sx={styles.textField}
												/>
											</Grid>
										</Grid>
									</Box>
								</Grid>
							</Grid>
							<br />
							{/* <Typography sx={{ color: "white" }}>Some Text Here</Typography> */}
						</Grid>
						<Footer/>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
