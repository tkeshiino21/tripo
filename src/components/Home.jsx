import React from "react";
import { Heading, Text } from "grommet";
import Layout from "./layout/Layout";
import ResponsiveGrid from "./layout/Responsive";
import DesktopHeader from "./layout/DesktopHeader";
import MainContainer from "./layout/MainContainer";

const Home = () => {
  return (
    <div>
      {/* <ResponsiveGrid /> */}
      {/* <DesktopHeader /> */}
      <Layout>
        <Text>contents here</Text>
      </Layout>
    </div>
  );
};

export default Home;
