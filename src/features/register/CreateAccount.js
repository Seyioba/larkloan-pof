import {
  Box,
  Button,
  Grid,
  ListItem,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const CreateAccount = () => {
  return (
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
        Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
        Dolor
      </Typography>

      <Grid container direction={"column"} spacing={3} component="form" pt={1}>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            DOB
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={styles.textField} />
          </LocalizationProvider>
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
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 500, fontSize: "10px", color: "#9A9FBF" }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
        {/* <Grid
          container
          fullWidth
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        > */}
        <Box
          container
          // fullWidth
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{
            backgroundColor: "primary.main",
            mt: 2,
            ml: 3,
            pt: 1.25,
            pb: 1.25,
            borderRadius: "8px",
          }}
        >
          <Link
            fullWidth
            href="/"
            underline="none"
            sx={{ backgroundColor: "primary.main" }}
            // sx={{ ml: "20px" }}
          >
            <Typography sx={{ color: "white" }}>Continue</Typography>
          </Link>
        </Box>
        {/* <Stack> */}

        {/* <Button variant="contained" sx={{ marginLeft: "10px", height:"48px", width: "341px",  }}>
													Next
												</Button> */}
        {/* </Stack> */}
        {/* </Grid> */}

        <Grid
          container
          fullWidth
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: "10px",
              pb: 0.5,
            }}
          >
            Already have an account?{" "}
            <Link
              href="/"
              underline="none"
              sx={{
                fontWeight: 600,
                fontSize: "10px",
                pb: 1,
                // ml: ,
                textTransform: "capitalize",
              }}
            >
              Login
            </Link>
          </Typography>
        </Grid>
        <Grid
          container
          fullWidth
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Typography
            variant="body1"
            sx={{
              fontWeight: 600,
              fontSize: "12px",
              pt: -2,
              mt: -1,
            }}
          >
            I agree to the Terms & Conditions and Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
