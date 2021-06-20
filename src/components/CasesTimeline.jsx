import React, { useState, useCallback, useEffect } from "react";
import Chart from "react-google-charts";
import Loader from "react-spinners/ClipLoader";
import axios from "axios";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

const CasesTimeline = () => {
  const [loading, setLoading] = useState(true);
  const [interval, setInterval] = useState("all");

  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      let timelineDataResponse = await axios.get(
        `/v3/covid-19/historical/all?lastdays=${interval}`
      );

      setData(Object.entries(timelineDataResponse.data?.cases));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [interval]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  const onDurationChange = (event) => {
    setInterval(event.target.value);
  };

  return loading === true ? (
    <div className="center padding">
      <Loader color="#3F51B5" size="6rem" />
    </div>
  ) : (
    <div className="center" style={{ marginTop: "1em", width: "100%" }}>
      <FormControl style={{ width: "50%" }}>
        <InputLabel id="select-interval-label">Duration</InputLabel>
        <Select
          labelId="select-interval-label"
          id="select-interval"
          value={interval}
          onChange={onDurationChange}
        >
          <MenuItem value="7">Last Week</MenuItem>
          <MenuItem value="30">Last Month</MenuItem>
          <MenuItem value="365">Last Year</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </FormControl>
      <div className="center" style={{ width: "80%" }}>
        <Chart
          width="100%"
          height="500px"
          chartType="Line"
          data={[[{ label: "Day" }, "Cases"], ...data]}
        />
      </div>
    </div>
  );
};

export default CasesTimeline;
