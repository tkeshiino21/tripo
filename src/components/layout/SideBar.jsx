import React, { Component } from "react";
import { Box, Button, Heading } from "grommet";
import { Notification } from "grommet-icons";

const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="light-2"
    pad={{ vertical: "small", horizontal: "medium" }}
    elevation="medium"
    {...props}
  />
);

class SideBar extends Component {
  state = {
    showSidebar: false,
  };
  render() {
    return (
      <Box fill>
        <AppBar>
          <Heading level="3" margin="none">
            My App
          </Heading>
          <Button icon={<Notification />} />
        </AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex align="center" justify="center">
            app body
          </Box>
        </Box>
      </Box>
    );
  }
}

export default SideBar;
