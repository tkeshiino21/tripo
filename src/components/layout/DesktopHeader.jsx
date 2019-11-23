import React from "react";
import { Heading, Text, Box } from "grommet";

const DesktopHeader = () => {
  return (
    <Box overflow={{ horizontal: "hidden" }}>
      <Text color="primary">本の</Text>
      <Text color="primary">記憶</Text>
      <Heading
        color="primary"
        level={1}
        size="98px"
        margin={{ top: "-10px" }}
        responsive={true}>
        LELLO
      </Heading>
      <Heading color="primary" level="1" size="98px">
        PORTO
      </Heading>
    </Box>
  );
};

export default DesktopHeader;
