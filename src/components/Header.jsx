import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Logo from "../images/logo.png";
const Header = () => {
  return (
    <AppBar
      position="relative"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Logo} alt="logo" style={{ width: "4em", marginRight: "1em" }} />
      <h1>Covid Dashboard</h1>
    </AppBar>
  );
};

export default Header;
