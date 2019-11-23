import React from "react";

import { Grommet, Box, Grid, Heading, ResponsiveContext } from "grommet";

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"],
};

const rows = {
  small: ["xsmall", "xsmall", "xsmall"],
  medium: ["xsmall", "xsmall"],
  large: ["xsmall"],
  xlarge: ["xsmall"],
};

// Set the different areas you need for every size
const fixedGridAreas = {
  small: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [0, 2], end: [0, 2] },
  ],
  medium: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] },
  ],
  large: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] },
  ],
  xlarge: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] },
  ],
};

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      let columnsVal = columns;
      let rowsVal = rows;
      let areasVal = areas;

      return (
        <Grid {...props} areas={areasVal} rows={rowsVal} columns={columnsVal}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const ResponsiveGrid = () => {
  return (
    <Grommet>
      <Box>
        <Heading level={2}>Resize me.</Heading>
        <Responsive
          rows={rows}
          columns={columns}
          gap="small"
          areas={fixedGridAreas}
          margin="medium">
          <Box
            gridArea="header"
            background="neutral-2"
            justify="center"
            align="center">
            <strong>Box 1</strong>
          </Box>
          <Box
            gridArea="test"
            background="neutral-3"
            justify="center"
            align="center">
            <strong>Box 2</strong>
          </Box>
        </Responsive>
      </Box>
    </Grommet>
  );
};

export default ResponsiveGrid;
