import React, { useState, useCallback, useEffect } from "react";
import Chart from "react-google-charts";
import Loader from "react-spinners/ClipLoader";
import axios from "axios";
import InfoCard from "./InfoCard";
import CountriesStats from "./CountriesStats";

const Stats = () => {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({});

  const loadData = useCallback(async () => {
    try {
      let dayDataResponse = await axios.get("/v3/covid-19/all");
      setData(dayDataResponse.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  return loading === true ? (
    <div className="center padding">
      <Loader color="#3F51B5" size="6rem" />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        padding: "2em 3em",
      }}
    >
      <div className="center">
        <div className="center-horizontal">
          <InfoCard title="Total" number={data.cases} color="#03a9f4" />
          <InfoCard title="Active" number={data.active} color="#26a69a" />
          <InfoCard title="Recovered" number={data.recovered} color="#4caf50" />
          <InfoCard title="Critical" number={data.critical} color="#ff9800" />
          <InfoCard title="Deaths" number={data.deaths} color="#ef5350" />
        </div>
        <div className="center" style={{ marginTop: "1em", width: "70%" }}>
          <Chart
            width={"90%"}
            height={"300px"}
            chartType="AreaChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Case Type", "Number", { role: "style" }],
              ["Active", data.active, "#26a69a"],
              ["Recovered", data.recovered, "#4caf50"],
              ["Critical", data.critical, "#ff9800"],
              ["Deaths", data.deaths, "#ef5350"],
            ]}
            options={{
              title: "Cases Analysis",
              sliceVisibilityThreshold: 0,
              pieHole: 0.4,
            }}
          />
          <Chart
            width={"100%"}
            height={"500px"}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
              ["Case Type", "Number", { role: "style" }],
              ["Active", data.active, "#26a69a"],
              ["Recovered", data.recovered, "#4caf50"],
              ["Critical", data.critical, "#ff9800"],
              ["Deaths", data.deaths, "#ef5350"],
            ]}
            options={{
              title: "Cases Analysis",
              sliceVisibilityThreshold: 0,
            }}
          />
        </div>
      </div>
      <div className="center-horizontal" style={{ width: "100%" }}>
        <CountriesStats />
      </div>
    </div>
  );
};

export default Stats;
