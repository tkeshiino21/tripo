import React, { Component } from "react";
import { Box, Button, Heading, Select } from "grommet";
import { Notification, Article } from "grommet-icons";
import MobileHeader from "./MobileHeader";

const MainContainer = ({ children }) => {
  return (
    <Box>
      <Box direction="row">
        <Heading level={2} color="primary" margin="20px">
          My App
        </Heading>
        <Select opitions={["Romance", "SienceFiction", "Art"]} />
        <Button icon={<Notification />} />
      </Box>

      <Box align="center" justify="center">
        {children}
      </Box>
    </Box>
  );
};

export default MainContainer;
