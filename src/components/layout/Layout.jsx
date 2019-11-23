import React from "react";
import { Box, Grid, Heading, Text } from "grommet";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    // <Grid rows={["large"]} columns={["large"]} gap="small">
    <Grid
      rows={["auto", "auto"]}
      columns={["xxsmall", "auto"]}
      gap="medium"
      areas={[
        { name: "header", start: [0, 0], end: [1, 0] },
        { name: "nav", start: [1, 0], end: [1, 0] },
      ]}>
      <Box gridArea="header">
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
      <Box gridArea="nav">
        <SideBar />
      </Box>
    </Grid>
    // </Grid>
  );
};

export default Layout;
