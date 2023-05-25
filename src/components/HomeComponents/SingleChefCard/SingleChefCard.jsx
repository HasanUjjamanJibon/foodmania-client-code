import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";

const SingleChefCard = ({ chefData }) => {
  const {
    id,
    chef_picture: image,
    chef_name: name,
    years_of_experience: experience,
    num_recipes,
    likes,
  } = chefData;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-md">
        {/*===============================
               react lazy load
            ====================================*/}
        <figure className=" pt-4  w-full block">
          <LazyLoad threshold={0.95}>
            <img
              src={image}
              alt="chef_image"
              className="rounded-xl  object-cover h-72 w-full"
            />
          </LazyLoad>
        </figure>

        {/*===============================
              Chef data
        ====================================*/}
        <div className="card-body  pb-8 ">
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <div className="flex flex-col  text-xl font-normal">
            <span>Experience : {experience} years</span>
            <span>No. of Recipe : {num_recipes}</span>
          </div>
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-1 text-xl font-semibold">
              <AiFillLike></AiFillLike>
              {likes}
            </div>
            <div className="tooltip" data-tip="Click to View">
              <Link
                className="btn btn-primary  cursor-pointer"
                to={`/reciepe/${id}`}
              >
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
