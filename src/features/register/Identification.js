import { Box, Grid, ListItem, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Identification = () => {
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
        Identification
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
      </Grid>
    </Box>
  );
};
