import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Select,
  ResponsiveContext,
  Text,
  Collapsible,
} from "grommet";
import { Notification, Article } from "grommet-icons";
import MobileHeader from "./MobileHeader";

const MainContainer = ({ children, ...rest }) => {
  const options = ["Romance", "SienceFiction", "Art"];
  const [value, setValue] = useState("");
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box width="700px" height="80vh" justify="stretch" direction="column">
          <MobileHeader />
          <Box direction="row" justify="stretch">
            <Box
              direction="column"
              justify="stretch"
              alignSelf="stretch"
              width="700px">
              <Select
                id="select"
                name="select"
                placeholder="Select"
                opitions={options}
                value="select"
                alignSelf="stretch"
              />
            </Box>
            {/* Title shows screen size is less than 768px */}
          </Box>

          <Box justify="stretch" round="xsmall" margin={{ top: "medium" }}>
            {children}
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default MainContainer;
