import React from "react";
import AwesomeService from "./AwesomeService";
import Banner from "./Banner";
import Coustomer from "./Coustomer";
import WorksCollaction from "./WorksCollaction";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Coustomer></Coustomer>
      <AwesomeService></AwesomeService>
      <WorksCollaction></WorksCollaction>
    </div>
  );
};

export default Home;
