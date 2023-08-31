import { Box, Grid, ListItem, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";

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
      <Grid
        container
        item
        position="relative"
        direction="column"
        // alignContent="center"
        alignItems="center"
        // alignSelf="center"
        // justifyContent="center"
        // justifyItems="center"
        // justifySelf="center"
        // textAlign="center"
      >
        <Box
          container
          // fullWidth
          item
          md={6}
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          sx={{
            backgroundColor: "primary.main",
            // mt: 2,
            ml: -1,
            pt: 1,
            pb: 1,
            borderRadius: "30px",
            position: "absolute",
            top: -55,
            pl: 2.5,
            pr: 2.5,
            // right: "50%",
            // left: "35%",
            // width: "300px",
          }}
        >
          <Typography sx={{ color: "white", width: "100%" }}>Retail</Typography>
        </Box>
      </Grid>

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
            type="file"
            hidden
            fullWidth
            placeholder="e.g. 0801 234 5678"
            sx={styles.textField}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
