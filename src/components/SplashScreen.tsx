import React from "react";
import { Box, Typography } from "@material-ui/core";

interface Props {
  loginFailMassage: string;
}
const SplashScreen = (props: Props) => {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Typography variant="h4" gutterBottom component="h1" align="center">
        Splash screen
      </Typography>
      {props.loginFailMassage ? (
        <>
          <Typography variant="body1" gutterBottom align="center">
            {props.loginFailMassage}
          </Typography>
          <Typography variant="body1" gutterBottom align="center">
            I will display fake data!!!
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body1" gutterBottom align="center">
            Trying to log in!
          </Typography>
        </>
      )}
    </Box>
  );
};

export default SplashScreen;
