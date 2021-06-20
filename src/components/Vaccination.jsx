import React, { useState, useCallback, useEffect } from "react";
import Chart from "react-google-charts";
import Loader from "react-spinners/ClipLoader";
import axios from "axios";
import { Typography } from "@material-ui/core";
const Vaccination = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const loadData = useCallback(async () => {
    try {
      let dataResponse = await axios.get(
        "/v3/covid-19/vaccine/coverage/countries?lastdays=1"
      );
      let returnedData = [];
      dataResponse.data.map((item) => {
        if (item.country === "UK")
          returnedData.push([
            "United Kingdom",
            Object.values(item.timeline)[0],
          ]);
        else if (item.country === "USA")
          returnedData.push(["United States", Object.values(item.timeline)[0]]);
        else if (item.country === "Syrian Arab Republic")
          returnedData.push(["Syria", Object.values(item.timeline)[0]]);
        else if (item.country === "Libyan Arab Jamahiriya")
          returnedData.push(["Libya", Object.values(item.timeline)[0]]);
        else if (item.country === "UAE")
          returnedData.push([
            "United Arab Emirates",
            Object.values(item.timeline)[0],
          ]);
        else returnedData.push([item.country, Object.values(item.timeline)[0]]);
      });
      setData(returnedData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  });

  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  return loading === true ? (
    <div className="center">
      <Loader color="#3F51B5" size="6rem" />
    </div>
  ) : (
    <div className="center padding ">
      <Typography style={{ paddingBottom: "2rem" }} variant="h4">
        Rolled out Vaccines
      </Typography>
      {data && (
        <Chart
          width="60vw"
          chartType="GeoChart"
          data={[["Country", "Rolled out Vaccines"], ...data]}
          options={{
            colorAxis: {
              colors: ["#a0a2af", "#777faf", "#6570af", "#5c69b3", "#3F51B5"],
            },
          }}
        />
      )}
    </div>
  );
};

export default Vaccination;
