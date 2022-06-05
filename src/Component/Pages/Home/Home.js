import React from "react";
import AwesomeService from "./AwesomeService";
import Banner from "./Banner";
import Coustomer from "./Coustomer";
import Review from "./Review";
import WorksCollaction from "./WorksCollaction";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Coustomer></Coustomer>
      <AwesomeService></AwesomeService>
      <WorksCollaction></WorksCollaction>
      <Review></Review>
    </div>
  );
};

export default Home;
