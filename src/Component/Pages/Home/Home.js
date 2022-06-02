import React from "react";
import AwesomeService from "./AwesomeService";
import Banner from "./Banner";
import Coustomer from "./Coustomer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Coustomer></Coustomer>
      <AwesomeService></AwesomeService>
    </div>
  );
};

export default Home;
