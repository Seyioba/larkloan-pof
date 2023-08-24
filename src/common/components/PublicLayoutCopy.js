import {
	Box,
	CardMedia,
	Container,
	Grid,
	TextField,
	Typography,
  Card,
  CardActionArea,
  CardContent
} from "@mui/material";
import React from "react";
import sideImage from "../images/Frame 47417.png";
import logo from "../images/logo-sm.png";
import { styles } from "../styles";

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

				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={sideImage}
						title="Image"
					/>
				</Card>

				<Grid
					item
					container
					xs={12}
					md={8}
					sx={{ background: "#000", height: "100%" }}
				>
					<Grid item xs={3} />
					<Grid item xs={6}>
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
									sx={{ background: "white", borderRadius: 4, py: 4, px: 4 }}
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
									<Box component="form">

                    <Grid item>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
											First Name
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    </Grid>
                  
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											Last Name
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											Email Address
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											Phone Number
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											DOB
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											Password
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
											Confirm Password
										</Typography>
										<TextField
											variant="outlined"
											fullWidth
											placeholder="e.g. 12345678901"
											sx={styles.textField}
										/>
									</Box>
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
