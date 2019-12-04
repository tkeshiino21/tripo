import React from "react";
import { Box } from "grommet";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Layout = ({ children }) => {
  return (
    <Box width="1000px" margin="auto">
      <Box direction="row">
        <DesktopHeader />

        <Box
          width="670px"
          margin={{ horizontal: "medium", vertical: "medium" }}>
          <MobileHeader />
          <MainContainer>{children}</MainContainer>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
