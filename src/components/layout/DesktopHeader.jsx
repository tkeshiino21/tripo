import React from "react";
import { Heading, Text, Box, ResponsiveContext, Collapsible } from "grommet";

const DesktopHeader = () => {
  return (
    // DesktopHeader is hidden when screen is small
    <ResponsiveContext.Consumer>
      {size => (
        <div>
          {size !== "small" && (
            <Collapsible open={true}>
              <Box
                background={{ color: "brand" }}
                margin={{ left: "medium", right: "small", top: "20px" }}>
                <Text>
                  本の
                  <br />
                  記憶
                </Text>
                <Heading
                  color="primary"
                  level={1}
                  size="90px"
                  style={{
                    fontWeight: "300",
                    letterSpacing: "4px",
                    lineHeight: "106px",
                  }}
                  margin={{
                    top: "4px",
                    bottom: "40px",
                    left: "15px",
                    right: "8px",
                  }}>
                  LETRO
                  <br />
                  PORTO
                </Heading>
              </Box>
            </Collapsible>
          )}
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default DesktopHeader;
