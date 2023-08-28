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
            {/* <Button variant="contained" sx={{ marginLeft: "10px", height:"48px", width: "341px",  }}>
													Next
												</Button> */}
            {/* </Stack> */}
          </Grid>
        </Grid>
      </Grid>

      {/* <Box component="form"></Box> */}
    </Box>
  </Grid>
</Grid>;
