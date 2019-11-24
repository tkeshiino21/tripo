import React from "react";
import { Heading, Text, Box, ResponsiveContext, Collapsible } from "grommet";

const DesktopHeader = () => {
  return (
    // DesktopHeader is hidden when screen is small
    <ResponsiveContext.Consumer>
      {size => (
        <Box>
          {size !== "small" && (
            <Collapsible direction="horizontal" open={true}>
              <Box
                background={{ color: "brand" }}
                margin={{ left: "medium", right: "large", top: "250px" }}>
                <Text color="primary">本の</Text>
                <Text color="primary">記憶</Text>
                <Heading
                  color="primary"
                  level={1}
                  size="90px"
                  style={{ fontWeight: "300", letterSpacing: "6px" }}
                  margin={{ vertical: "none" }}>
                  LETRO
                </Heading>

                <Heading
                  color="primary"
                  level={1}
                  size="90px"
                  style={{ fontWeight: "300", letterSpacing: "6px" }}
                  margin={{ vertical: "none" }}>
                  PORTO
                </Heading>
              </Box>
            </Collapsible>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default DesktopHeader;
