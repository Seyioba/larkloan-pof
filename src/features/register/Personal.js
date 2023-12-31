import { Box, Grid, ListItem, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export const Personal = () => {
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
      <Typography variant="h6" sx={styles.formHeader}>
        Personal
      </Typography>
      <Typography sx={styles.formSubheader}>
        Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
        Dolor
      </Typography>

      <Grid container direction={"column"} spacing={3} component="form" pt={1}>
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker sx={styles.datePicker} />
          </LocalizationProvider>
        </Grid>
      </Grid>
    </Box>
  );
};
