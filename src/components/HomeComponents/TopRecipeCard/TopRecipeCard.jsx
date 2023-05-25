import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";

const TopRecipeCard = ({ recipe }) => {
  const { recipe_name, rating, image_link } = recipe;
  return (
    <div>
      <div className="card lg:h-[150px]  overflow-hidden lg:card-side bg-base-100 shadow-md grid grid-cols-1 lg:grid-cols-3 ">
        <figure className="w-full">
          {/*===============================
             REACT LAZY LOAD
        ====================================*/}
          <LazyLoad threshold={0.55}>
            <img
              src={image_link}
              className="object-fill  h-full w-full image-full"
              alt="Album"
            />
          </LazyLoad>
        </figure>
        <div className="card-body lg:justify-between   lg:col-span-2">
          <h2 className="card-title font-bold text-2xl">{recipe_name}</h2>

          {/* rating */}
          <div className="flex items-center gap-2 ">
            <Rating
              style={{ maxWidth: 120 }}
              value={Math.round(rating)}
              readOnly
            />
            <span className="font-semibold text-lg">{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRecipeCard;
