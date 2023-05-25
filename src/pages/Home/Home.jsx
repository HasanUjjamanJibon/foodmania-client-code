import React from "react";
import Banner from "../../components/HomeComponents/Banner";
import ChefSection from "../../components/HomeComponents/ChefSection";
import About from "../../components/HomeComponents/About";
import Contact from "../../components/HomeComponents/Contact";
import Partner from "../../components/HomeComponents/Partner";
import TopRatedRecipe from "../../components/HomeComponents/TopRatedRecipe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Partner></Partner>
      <ChefSection></ChefSection>
      <About></About>
      <TopRatedRecipe></TopRatedRecipe>
      <Contact></Contact>
    </div>
  );
};

export default Home;
