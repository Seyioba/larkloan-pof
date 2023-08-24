import {
	Box,
	CardMedia,
	Container,
	Grid,
	TextField,
	Typography,
	Card,
	CardActionArea,
	CardContent,
	DateField,
	ListItem,
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

export const PublicLayout = () => {
	return (
		<>
			<Grid
				sx={{
					display: {
						// xs: "none",
						md: "block",
						height: "100%",
						// backgroundImage: "url('../images/logo-sm.png')",
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
						sx={{ background: "#000", height: "100%"}}
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
										sx={{ background: "white", borderRadius: 2, py: 4, px: 4, maxWidth: "448px" }}
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

										<Grid container direction={"column"} spacing={3}>
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
													sx={{ fontWeight: 500, fontSize: "10px" }}>
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

										<Box component="form"></Box>
									</Box>
								</Grid>
							</Grid>

							<Typography sx={{ color: "white" }}>Some Text Here</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};
