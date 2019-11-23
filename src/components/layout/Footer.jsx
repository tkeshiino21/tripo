import React from "react";
import { Text, Box } from "grommet";

const Footer = () => {
  return (
    <Box style={{ position: "absolute", bottom: 0 }}>
      <Text color="primary" size="16px">
        created by Takeshi INoue
      </Text>
    </Box>
  );
};

export default Footer;
