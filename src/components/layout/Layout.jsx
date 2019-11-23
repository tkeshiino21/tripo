import React from "react";
import { Box } from "grommet";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
import DesktopHeader from "./DesktopHeader";

const Layout = ({ children }) => {
  return (
    <Box>
      <Box direction="row">
        {/* //DesktopHeader is hidden when screen is small} */}
        <DesktopHeader />
        <MainContainer>{children}</MainContainer>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
