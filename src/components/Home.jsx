import React from "react";
import { Heading, Text } from "grommet";
import Layout from "./layout/Layout";
import BookList from "./layout/BookList";

const Home = () => {
  return (
    <div>
      {/* <ResponsiveGrid /> */}
      {/* <DesktopHeader /> */}
      <Layout>
        <Text>contents here</Text>
        <BookList />
      </Layout>
    </div>
  );
};

export default Home;
