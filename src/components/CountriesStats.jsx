import React, { useState, useCallback, useEffect } from "react";
import { Card, TextField } from "@material-ui/core";
import Loader from "react-spinners/ClipLoader";
import axios from "axios";
import CountryCard from "./CountryCard";
const CountriesStats = () => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [data, setData] = useState({ timeline: [], data: {} });

  const loadData = useCallback(async () => {
    try {
      let dataResponse = await axios.get("/v3/covid-19/countries");

      setData(dataResponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return loading === true ? (
    <div className="center padding">
      <Loader color="#3F51B5" size="6rem" />
    </div>
  ) : (
    <Card
      className="country"
      style={{
        overflowY: "scroll",
        overflowX: "hidden",
        height: "100vh",
        width: "100%",
        padding: "1em 1.5em",
      }}
    >
      <TextField
        label="Search Country"
        variant="outlined"
        onChange={onSearchChange}
        autocomplete="off"
        style={{ width: "100%" }}
      />
      {data
        .filter((data) =>
          data.country.toLowerCase().includes(search.toLowerCase())
        )
        .map((country) => (
          <CountryCard country={country} />
        ))}
    </Card>
  );
};

export default CountriesStats;
