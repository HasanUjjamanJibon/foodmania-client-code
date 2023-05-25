import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ChefViews from "./../../components/ChefComponent/ChefViews";
import SingleRecipeCard from "./SingleRecipeCard";

const ChefReciepe = () => {
  const [chef, setChef] = useState([]);
  const { id } = useParams();
  const reciepiesData = useLoaderData();
  {
    /*===============================
              LOAD DATA BY CHEF ID
        ====================================*/
  }
  useEffect(() => {
    fetch(`https://food-reciepe-server.vercel.app/chef/`)
      .then((res) => res.json())
      .then((chef) => {
        const dynamicChefId = chef?.find((chefId) => chefId.id == id);
        setChef(dynamicChefId);
      });
  }, []);

  return (
    <div className="container mx-auto my-28">
      <div>{chef && <ChefViews chef={chef}></ChefViews>}</div>
      <div className="px-4 lg:px-0 my-28">
        <div className="space-y-10 ">
          <h2 className="py-4 mt-20 md:py-6 bg-gray-800 text-center text-lg md:text-xl font-medium text-slate-100">
            {chef.chef_name}'s Recipe
          </h2>
          {/* recipe data mapping */}
          {reciepiesData &&
            reciepiesData?.map((recipe, index) => (
              <SingleRecipeCard key={index} recipe={recipe}></SingleRecipeCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ChefReciepe;
