import React from "react";
import { Box } from "grommet";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Layout = ({ children }) => {
  return (
    <Box
      width="1000px"
      margin={{ vertical: 0, horizontal: "auto" }}
      height="100vh">
      <Box direction="row">
        <DesktopHeader />
        <Box margin="0" pad="0" height="100vh" width="1000px">
          <Box
            height="90vh"
            margin={{ horizontal: "medium", vertical: "auto" }}>
            <MobileHeader />
            <MainContainer>{children}</MainContainer>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
