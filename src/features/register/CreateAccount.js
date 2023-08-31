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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  password: "",
  confirmPassword: "",
};

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),
  phone: yup
    .string()
    .matches(phoneRegex, "Enter a valid phone number")
    .required("Phone number is required"),
  dob: yup.date().transform(function (value, originalValue) {
    if (this.isType(value)) {
      return value;
    }
    const result = parse(originalValue, "MM/dd/yyyy", new Date());
    return result;
  }),
  password: yup
    .string()
    .required("Password is required")
    .matches(passwordRegex, "Password does not match required rules"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const CreateAccount = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("form submitted", data);
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

      <Grid
        container
        direction={"column"}
        spacing={3}
        component="form"
        pt={1}
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            First Name
          </Typography>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                placeholder="e.g. John"
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
                sx={styles.textField}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Last Name
          </Typography>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                placeholder="e.g. Doe"
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
                sx={styles.textField}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Email Address
          </Typography>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                placeholder="e.g. johndoe@gmail.com"
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={styles.textField}
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Phone Number
          </Typography>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                placeholder="e.g. 12345678901"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                sx={styles.textField}
              />
            )}
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
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <DatePicker
                  {...field}
                  inputFormat="MM/dd/yyyy"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      required
                      error={!!errors.dob}
                      helperText={errors?.fob?.message}
                      fullWidth
                      autoComplete="off"
                      variant="outlined"
                      sx={styles.textField}
                    />
                  )}
                />
              )}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "10px", pb: 0.5 }}
          >
            Password
          </Typography>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                sx={styles.textField}
              />
            )}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                required
                variant="outlined"
                fullWidth
                type="password"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                sx={styles.textField}
              />
            )}
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
            component="button"
            type="submit"
            fullWidth
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
            I agree to the{" "}
            <Link href="/" sx={{ color: "black" }}>
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href="/" sx={{ color: "black" }}>
              Privacy Policy
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
