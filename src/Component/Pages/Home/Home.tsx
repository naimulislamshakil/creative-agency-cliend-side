import React from "react";
import AwesomeService from "./AwesomeService";
import Banner from "./Banner";
import Contact from "./Contact";
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
      <Contact></Contact>
    </div>
  );
};

export default Home;
