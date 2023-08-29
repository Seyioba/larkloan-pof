import {
  Box,
  Button,
  Grid,
  ListItem,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const LoginCard = () => {
  return (
    <>
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
        {/* Top Retail Button */}
        <Grid
          container
          // item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          md={0.5}
          xs={2}
          sx={{
            // width: "5%",
            height: "30px",
            color: "white",
            backgroundColor: "primary.main",
            // backgroundImage: `url(${sideImage})`,
            position: "absolute",
            ml: 13.5,

            // width: "50%",
            // // flex: "",
            top: 75,
            borderRadius: 50,
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              textJustify: "center",
              // pt: 0.7,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Retail
          </Typography>
        </Grid>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: "center", pb: 1 }}
        >
          Login
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            textAlign: "center",
            pb: 2,
            fontSize: 12,
          }}
        >
          Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
          Dolor
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
              sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
            >
              Email or Phone Number
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
              sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            {/* <VisibilityIcon /> */}
          </Grid>

          <Grid
            container
            item
            spacing={0}
            direction="column"
            alignItems="center"
          >
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: "10px",
                  pb: 0.5,
                }}
              >
                Don't have an account?{" "}
                <Link
                  href="/register"
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    fontSize: "10px",
                    pb: 1,
                    // ml: ,
                    textTransform: "capitalize",
                  }}
                >
                  Create One
                </Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
