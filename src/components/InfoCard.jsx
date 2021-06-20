import React from "react";
import { Card, Typography } from "@material-ui/core";
const InfoCard = ({ title, number, color, ...props }) => {
  return (
    <Card style={{ padding: "1em 2em", marginRight: "1em" }} variant="outlined">
      <Typography style={{ color }} align="center">
        {title}
      </Typography>
      <Typography align="center" variant="h5" component="h2">
        {number.toLocaleString()}
      </Typography>
    </Card>
  );
};

export default InfoCard;
