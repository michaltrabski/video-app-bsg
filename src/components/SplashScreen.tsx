import React from "react";
import { Box } from "@material-ui/core";

interface Props {
  loginFailMassage: string;
}
const SplashScreen = (props: Props) => {
  return (
    <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
      {props.loginFailMassage ? (
        <p>{props.loginFailMassage}</p>
      ) : (
        <p>Trying to log in!</p>
      )}
    </Box>
  );
};

export default SplashScreen;
