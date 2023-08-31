import {
  Box,
  FormControl,
  Grid,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React from "react";
import { styles } from "../../common/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const Identification = () => {
  const [identification, setIdentification] = React.useState("");
  const handleIDChange = (event) => {
    setIdentification(event.target.value);
  };

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

      <Typography variant="h6" sx={styles.formHeader}>
        Identification
      </Typography>
      <Typography sx={styles.formSubheader}>
        Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum
        Dolor
      </Typography>

      <Grid container direction={"column"} spacing={3} component="form" pt={1}>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Mode of Identification
          </Typography>
          <FormControl fullWidth sx={styles.textField}>
            <Select
              // labelId="demo-simple-select-label"
              // id="demo-simple-select"
              defaultValue="none"
              value={identification}
              label="Identification"
              onChange={handleIDChange}
            >
              <MenuItem value="none">None</MenuItem>
              <MenuItem value="nin">National Identification Number</MenuItem>
              <MenuItem value="international_passport">
                International Passport
              </MenuItem>
              {/* <MenuItem value="Bariga">Bariga</MenuItem> */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px" }}
          >
            ID Number
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="e.g. ABC123456"
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
