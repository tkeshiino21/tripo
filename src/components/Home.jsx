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
        <Text>私の愛した本</Text>
        <BookList />
      </Layout>
    </div>
  );
};

export default Home;
