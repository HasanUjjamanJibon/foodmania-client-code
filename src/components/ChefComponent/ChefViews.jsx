import React from "react";
import LazyLoad from "react-lazy-load";

const ChefViews = ({ chef }) => {
  const {
    id,
    chef_picture: image,
    chef_name: name,
    years_of_experience: experience,
    num_recipes,
    likes,
    bio,
  } = chef;
  return (
    <div className="my-10 px-4 grid grid-cols-1 lg:grid-cols-3 gap-10  lg:px-0">
      {/* chef Image */}
      <div className="h-fit w-full text-center">
        {/* =================
            Lazy Load image
    ========================= */}
        <LazyLoad threshold={0.95}>
          <img src={image} className="w-full  min-h-[400px] rounded-md" alt="" />
        </LazyLoad>
      </div>
      <div className="space-y-4 font-medium lg:col-span-2">
        {/* chef name */}
        <h1 className="text-3xl lg:text-4xl font-bold">{name}</h1>
        {/* short Bio for chef */}
        <div>
          <span className="text-xl">
            Bio : <span className="text-lg leading-6">{bio}</span>{" "}
          </span>
        </div>
        {/* likes */}
        <div className="flex items-center gap-2">
          <span className="text-xl">Likes : </span>
          <div className="flex items-center gap-1 text-lg">
            <span>{likes}</span>
          </div>
        </div>
        {/* Recipe Items */}
        <div className="flex items-center gap-1">
          <p className="text-xl">Recipe Items : </p>
          <span className="text-lg">{num_recipes}</span>
        </div>
        {/* experiences */}
        <div className="flex items-center gap-1">
          <p className="text-xl">Experiences : </p>
          <span>{experience} years </span>
        </div>
      </div>
    </div>
  );
};

export default ChefViews;
