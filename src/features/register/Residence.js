import {
  Box,
  Grid,
  ListItem,
  TextField,
  Typography,
  Button,
  Input,
  Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { styles } from "../../common/styles";

export const Residence = () => {
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
        Residence
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
            sx={{
              fontWeight: 600,
              fontSize: "10px",
              pb: 0.5,
            }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
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
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Utility Bill
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#9A9FBF1A",
              color: "black",
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: "12px",
              boxShadow: "none",
              height: "40px",
            }}
          >
            <TextField
              variant="outlined"
              type="file"
              hidden
              fullWidth
              placeholder="e.g. 0801 234 5678"
              sx={styles.inputFile}
            />
            <AddIcon sx={{ maxHeight: "16px", color: "#27AE60" }} />
            Upload
          </Button>
        </Grid>

        <Grid
          container
          item
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          // sx={{ minHeight: "100vh" }}
        >
          <Grid item sx={{ justifySelf: "center" }}>
            {/* <Stack> */}
            <Link href="/" underline="none">
              <Button
                variant="contained"
                sx={{
                  width: "48px",
                  height: "48px",
                  color: "white",
                  backgroundColor: "#9A9FBF",
                }}
              >
                <ArrowBackIcon />
              </Button>
            </Link>

            {/* <Button variant="contained" sx={{ marginLeft: "10px", height:"48px", width: "341px",  }}>
													Next
												</Button> */}
            {/* </Stack> */}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
