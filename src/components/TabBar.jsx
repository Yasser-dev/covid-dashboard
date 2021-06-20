import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";

const TabBar = ({ value, handleChange }) => {
  return (
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} centered variant="fullWidth">
        <Tab label="Stats" />
        <Tab label="Cases Timeline" />
        <Tab label="Vaccination" />
      </Tabs>
    </AppBar>
  );
};

export default TabBar;
