import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <div id="home">
        <Header />
      </div>

      <div id="about">
        <ExploreMenu setCategory={setCategory} category={category} />
      </div>

      <div id="my-orders">
        <FoodDisplay category={category} />
      </div>

      <div id="privacy">
        <AppDownload />
      </div>
    </>
  );
};

export default Home;
