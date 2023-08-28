import {
  Box,
  Stack,
  Button,
  Grid,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TestPhoto from "./TestPhoto";

export const Photo = () => {
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
        Photo
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
        pt={4}
        pl={2}
      >
        <Grid
          item
          //   xs={8}
          //   md={10}
          sx={{
            backgroundColor: "#9A9FBF1A",
            width: "240px",
            height: "240px",
            alignSelf: "center",
            borderRadius: "8px",
          }}
        >
          <Typography>
            <AddAPhotoIcon sx={{ maxHeight: "15px" }} />
            Take Photo
          </Typography>
        </Grid>

        <Grid container item sx={{ alignSelf: "center" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              sx={{
                height: "48px",
                // backgroundColor: "#9A9FBF",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <ArrowBackIcon />
            </Button>
            <Button
              variant="contained"
              //   xs={}
              sx={{ marginLeft: "10px", height: "48px", width: "341px" }}
              //   width={{ xs: "10px" }}
            >
              Next
            </Button>
          </Stack>
        </Grid>
        <Grid item sx={{ alignSelf: "center" }}>
          <Button sx={{ textTransform: "capitalize" }}>Skip this step</Button>
        </Grid>

        {/* <TestPhoto /> */}
        {/* <Grid item>
          <TestPhoto />
        </Grid> */}
      </Grid>
    </Box>
  );
};
