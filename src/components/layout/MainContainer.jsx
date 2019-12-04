import React, { useState } from "react";
import { Box, Select, Text } from "grommet";
import { Card } from "./Card";
import { bookDatas } from "./bookData";
import Fab from "./Fab";

const MainContainer = ({ children, ...rest }) => {
  const options = ["Romance", "SienceFiction", "Art", "Favorite10"];
  const [value, setValue] = useState("Favorite10");
  const CategorizedDatas = ({ value }) => {
    if (value === "Favorite10") {
      return bookDatas
        .filter(bookData => bookData.favorite === true)
        .map(categorizedData => {
          return (
            <li key={categorizedData.id}>
              <Text>{categorizedData.title}</Text>
              <Text color="dark-4" size="12px" margin={{ left: "small" }}>
                / {categorizedData.author}{" "}
              </Text>
            </li>
          );
        });
    } else {
      return bookDatas
        .filter(bookData => bookData.category === value)
        .map(categorizedData => {
          return (
            <li key={categorizedData.id}>
              <Text>{categorizedData.title}</Text>
              <Text color="dark-4" size="12px" margin={{ left: "small" }}>
                / {categorizedData.author}{" "}
              </Text>
            </li>
          );
        });
    }
  };
  return (
    <Card>
      <Box direction="column" justify="end">
        <Select
          placeholder="Select"
          options={options}
          value={value}
          justify="evenly"
          onChange={({ option }) => setValue(option)}
          alignSelf="stretch"
        />
        <Box margin={{ top: "medium" }}>{children}</Box>
        <CategorizedDatas value={value} />
      </Box>
      <Fab />
    </Card>
  );
};

export default MainContainer;
