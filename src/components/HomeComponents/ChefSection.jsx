import React, { useContext } from "react";
import { ComponentProvider } from "../../Provider/AuthProvider/AuthProvider";
import SingleChefCard from "./SingleChefCard/SingleChefCard";

const ChefSection = () => {
  // context
  const { chefsData } = useContext(ComponentProvider);

  return (
    <div className="container mx-auto my-36 w-full">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold   border-b-4 border-purple-800 py-2 inline-block ">
          Our Honourable Chef
        </h2>
      </div>
      {/*  Our Chef  Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 gap-4 ">
        {chefsData &&
          chefsData?.map((chefData) => (
            <SingleChefCard
              key={chefData.id}
              chefData={chefData}
            ></SingleChefCard>
          ))}
      </div>
    </div>
  );
};

export default ChefSection;
