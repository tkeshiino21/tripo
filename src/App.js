import React from "react";
import "./app.css";
import { Grommet } from "grommet";
import Home from "./components/Home";
import { theme } from "./components/theme/GlobalTheme";

const App = () => {
  return (
    <Grommet theme={theme}>
      <Home />
    </Grommet>
  );
};

export default App;
