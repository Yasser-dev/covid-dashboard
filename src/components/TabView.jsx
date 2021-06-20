import React, { Fragment } from "react";
import TabBar from "./TabBar";
import Vaccination from "./Vaccination";
import Stats from "./Stats";
import CasesTimeline from "./CasesTimeline";
const TabView = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  const getTab = (value) => {
    if (value === 0) return <Stats />;
    else if (value === 1) return <CasesTimeline />;
    return <Vaccination />;
  };
  return (
    <Fragment>
      <TabBar value={value} handleChange={handleChange} />
      {getTab(value)}
    </Fragment>
  );
};

export default TabView;
