import React from "react";
import { Button, Box } from "grommet";
import { Edit } from "grommet-icons";

const Fab = () => {
  return (
    <Box justify="end" align="end" pad="none" flex="grow">
      <Button
        primary
        icon={<Edit />}
        label="Edit"
        onClick={() => {}}
        style={{ display: "flex" }}
      />
    </Box>
  );
};

export default Fab;
