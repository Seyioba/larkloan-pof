import {
  Box,
  Grid,
  ListItem,
  TextField,
  Typography,
  Button,
  Input,
  Link,
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { styles } from "../../common/styles";
import MenuItem from "@mui/material/MenuItem";

export const Residence = () => {
  const [city, setCity] = React.useState("");
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [state, setState] = React.useState("");

  const handleStateChange = (event) => {
    setState(event.target.value);
  };
  // const cityNames = ()=> {

  // }

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
        sx={{
          fontWeight: 700,
          fontSize: "30px",
          textAlign: "center",
          letterSpacing: -2,
        }}
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
        Let us know your current address and verify it with a utility bill.
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
            placeholder="e.g. 123, Four Str."
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
          {/* <TextField
            variant="outlined"
            fullWidth
            placeholder="Ojota"
            sx={styles.textField}
          /> */}
          {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
          <FormControl fullWidth sx={styles.textField}>
            {/* <InputLabel>Ojota</InputLabel> */}
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleCityChange}
            >
              <MenuItem value="Yaba">Yaba</MenuItem>
              <MenuItem value="Ojota">Ojota</MenuItem>
              <MenuItem value="Bariga">Bariga</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            State
          </Typography>
          {/* <TextField
            variant="outlined"
            fullWidth
            placeholder="Lagos"
            sx={styles.textField}
          /> */}
          <FormControl fullWidth sx={styles.textField}>
            <Select
              value={state}
              onChange={handleStateChange}
              // displayEmpty
              // inputProps={{ "aria-label": "no" }}
              // placeholder="ple"
            >
              {/* <MenuItem aria-label="None" value="">
                None
              </MenuItem> */}
              <MenuItem value="Lagos">Lagos</MenuItem>
              <MenuItem value="Kogi">Kogi</MenuItem>
              <MenuItem value="Bayelsa">Bayelsa</MenuItem>
            </Select>
            {/* <FormHelperText>Without label</FormHelperText> */}
          </FormControl>
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
