import React, { useEffect, useState } from "react";
import TopRecipeCard from "./TopRecipeCard/TopRecipeCard";

const TopRatedRecipe = () => {
  const [topRecipe, setTopRecipe] = useState([]);

  // Load Data
  useEffect(() => {
    fetch("https://food-reciepe-server.vercel.app/top-rated")
      .then((res) => res.json())
      .then((data) => setTopRecipe(data));
  }, []);

  return (
    <div className="my-20 container mx-auto">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold   border-b-4 border-purple-800 py-2 inline-block ">
          Top Rated Recipe
        </h2>
      </div>
      {/* top rated recipe list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
        {topRecipe &&
          topRecipe?.map((recipe) => (
            <TopRecipeCard key={recipe.id} recipe={recipe}></TopRecipeCard>
          ))}
      </div>
    </div>
  );
};

export default TopRatedRecipe;
