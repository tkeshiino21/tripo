import React from "react";
import { Box } from "grommet";

export const Card = props => {
  return (
    <Box
      background={{
        color: "#fff",
        opacity: "0.92",
      }}
      // height="70vh"
      pad={{ vertical: "medium", horizontal: "large" }}
      elevation="medium"
      style={{ zIndex: "1", height: "70vh" }}
      direction="column"
      border
      {...props}
    />
  );
};
