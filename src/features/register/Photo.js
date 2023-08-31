import {
  Box,
  Stack,
  Button,
  Grid,
  ListItem,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { AddAPhotoOutlined } from "@mui/icons-material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import TestPhoto from "./TestPhoto";

export const Photo = () => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      position="relative"
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
          <Typography sx={{ color: "white", width: "100%" }}>SME</Typography>
        </Box>
      </Grid>

      {/* <Box
        container
        item
        direction="column"
        spacing={0}
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        alignSelf="center"
        sx={{
          background: "primary.main",
          position: "absolute",
          top: 0,
          // alignItems: "center",
          // textAlign: "center",
        }}
      >
        <Typography justifyContent="center" textAlign="center">
          A box I type
        </Typography>
      </Box> */}

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
        ml={-3}
      >
        <Grid
          item
          //   xs={8}
          //   md={10}
          ml={2}
          sx={{
            backgroundColor: "#9A9FBF1A",
            width: "240px",
            height: "240px",
            alignSelf: "center",
            borderRadius: "8px",
          }}
        >
          <Typography>
            <AddAPhotoOutlined sx={{ maxHeight: "15px" }} />
            Take Photo
          </Typography>
        </Grid>

        {/* <Grid container item sx={{ alignSelf: "center" }}>
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
        </Grid> */}
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
