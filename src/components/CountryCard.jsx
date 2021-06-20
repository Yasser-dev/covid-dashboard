import React from "react";
import { Card, Avatar, Typography } from "@material-ui/core";
const CountryCard = ({ country }) => {
  return (
    <Card
      variant="outlined"
      style={{
        margin: "1em .5em",
        padding: "1em 2em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="center-horizontal" style={{ marginBottom: "1em" }}>
        <Avatar
          variant="rounded"
          src={country.countryInfo.flag}
          alt={country.name + "flag"}
          style={{
            marginRight: "1em",
            border: "1px solid #e2e2e2",
          }}
        />
        <Typography variant="h6">{country.country}</Typography>
      </div>
      <div
        className="center-horizontal"
        style={{ width: "100%", marginBottom: ".3em" }}
      >
        <Typography variant="body1">
          <strong>Cases: </strong>{" "}
          <span style={{ color: "#03a9f4" }}>
            {country.cases.toLocaleString()}
          </span>
        </Typography>
      </div>
      <div className="center-horizontal" style={{ width: "100%" }}>
        <div className="center-horizontal" style={{ width: "50%" }}>
          <Typography variant="body1">
            <strong> Active:</strong>{" "}
            <span style={{ color: "#26a69a" }}>
              {" "}
              {country.active.toLocaleString()}
            </span>
          </Typography>
        </div>
        <div className="center-horizontal" style={{ width: "50%" }}>
          <Typography variant="body1">
            <strong>Recovered: </strong>
            <span style={{ color: "#4caf50" }}>
              {" "}
              {country.recovered.toLocaleString()}
            </span>
          </Typography>
        </div>
      </div>
      <div className="center-horizontal" style={{ width: "100%" }}>
        <div className="center-horizontal" style={{ width: "50%" }}>
          <Typography variant="body1">
            <strong>Critical: </strong>
            <span style={{ color: "#ff9800" }}>
              {" "}
              {country.critical.toLocaleString()}
            </span>
          </Typography>
        </div>
        <div className="center-horizontal" style={{ width: "50%" }}>
          <Typography variant="body1">
            <strong>Deaths: </strong>
            <span style={{ color: "#ef5350" }}>
              {" "}
              {country.deaths.toLocaleString()}
            </span>
          </Typography>
        </div>
      </div>
    </Card>
  );
};

export default CountryCard;
