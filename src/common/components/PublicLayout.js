import {
  Box,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import sideImage from "../images/Frame 47417.png";
import logo from "../images/logo-sm.png";
import { styles } from "../styles";

export const PublicLayout = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={false}
        md={3}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Box component="img" src={sideImage} width="100%" />
        <Grid container direction="column">
          <Grid item xs={8} />
          <Grid item xs={2}>
            <Typography
              variant="h4"
              sx={{
                lineHeight: "150%",
                letterSpacing: -1.2,
                fontWeight: 800,
                fontSize: 40,
                fontStyle: "normal",
                color: "white",
              }}
            >
              Affordable Financing for Nigerians Businesses.
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>

      
      <Grid
        item
        container
        xs={12}
        md={9}
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
              <Box sx={{ background: "white", borderRadius: 4, py: 4, px: 4 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "center", pb: 1 }}
                >
                  Bank
                </Typography>
                <Typography
                  sx={{ fontWeight: "medium", textAlign: "center", pb: 2 }}
                >
                  Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem
                  Ipsum Dolor
                </Typography>
                <Box component="form">
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    BVN
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
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Grid>
  );
};
