import React, { useState } from "react";
import { Heading, Box, Button } from "grommet";
import { Magic, Github } from "grommet-icons";

const MobileHeader = () => {
  const [state, setState] = useState({ isLightTheme: true });
  return (
    <Box width="700px" wrap="true" direction="row">
      <Box direction="row">
        <Button
          icon={<Magic />}
          onClick={() => setState({ isLightTheme: !state.isLightTheme })}
        />

        <Button icon={<Github />} />
      </Box>
      <Box
        direction="column"
        flex="grow"
        width="100%"
        background={state.isLightTheme ? "#E3D3C4" : "brand"}
        elevation="medium"
        justify="center">
        <Heading
          level={3}
          size="22px"
          color={state.isLightTheme ? "brand" : "primary"}
          margin="small">
          Letro Porto
        </Heading>
      </Box>
    </Box>
  );
};

export default MobileHeader;
