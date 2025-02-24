import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function Section2() {
  return (
    // <Grid container spacing={2} sx={{ height: "100vh", padding: "2rem" , backgroundColor: "green"}}>
    //   {/* Left Section (0.5fr) */}
    //   <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    //     <Box>
    //       <Typography variant="h4" fontWeight="bold">
    //         Know More About Us
    //       </Typography>
    //       <Typography variant="body1">
    //         Why to Choose CodeCompete
    //       </Typography>
    //     </Box>
    //   </Grid>

    //   {/* Right Section (1fr) */}
    //   <Grid item xs={12} md={8} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    //     <Box>
    //       <Typography variant="h5" fontWeight="bold">
    //         You will get to know about the latest technologies and trends in the coding world.
    //       </Typography>
    //       <Typography variant="body2">
    //         here will be image
    //       </Typography>
    //     </Box>
    //   </Grid>
    // </Grid>

    <Box
      minHeight={"100vh"}
      display="flex"
      alignItems="center"
      justifyContent="center"

    >
      <Typography variant="h4" fontWeight="bold">
        Know More About Us
      </Typography>
      <Typography variant="body1">
        Why to Choose CodeCompete
      </Typography>

    </Box>

  
  );
}

export default Section2;
