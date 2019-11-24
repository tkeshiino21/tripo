import React from "react";
import { Text, ResponsiveContext, Collapsible, Box, Button } from "grommet";
import { Notification } from "grommet-icons";

const MobileHeader = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box width="700px" height="80vh" justify="stretch" direction="column">
          <Button icon={<Notification />} />
          {size === "small" && (
            <Collapsible direction="horizontal" open={true}>
              <Collapsible open={true}>
                <Text>LELLO PORTO</Text>
              </Collapsible>
            </Collapsible>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default MobileHeader;
