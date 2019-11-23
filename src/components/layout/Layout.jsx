import React from "react";
import { Box } from "grommet";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box direction="row" justify="stretch">
        <DesktopHeader />
        <MainContainer>{children}</MainContainer>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
