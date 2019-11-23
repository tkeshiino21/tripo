import React from "react";
import { Heading, Box } from "grommet";

const DesktopHeader = () => {
  return (
    <Box>
      <Heading
        color="dark-1"
        level={1}
        size="12px"
        margin={{ top: "-10px" }}
        responsive={true}>
        LELLO
      </Heading>
      <Heading color="dark-1" level="1" size="98px">
        PORTO
      </Heading>
    </Box>
  );
};

export default DesktopHeader;
