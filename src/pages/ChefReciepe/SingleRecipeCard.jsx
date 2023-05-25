import React, { useContext, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";
import { AuthProviderInfo } from "../../Provider/AuthProvider/AuthProvider";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const SingleRecipeCard = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating, image_link } =
    recipe;
  const { Toast } = useContext(AuthProviderInfo);
  const [isDisabled, setDisabled] = useState(false);

  const handleFavouriteButton = () => {
    setDisabled(true);

    Toast("✔️ Added to favourite!");
  };
  return (
    <div>
      <div className="card h-fit lg:card-side bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-3">
        <div className="relative">
          <figure>
            {/*===============================
             REACT LAZY LOAD
            ====================================*/}
            <LazyLoad height={384} width={520} threshold={0.95}>
              <img
                src={image_link}
                className="object-fill   h-96 w-full"
                alt="Album"
              />
            </LazyLoad>
          </figure>
          <div className="absolute top-3 right-3">
            {isDisabled ? (
              <div className="tooltip  p-0 m-0 h-fit" data-tip="Already Added">
                <AiFillHeart className="text-2xl text-red-600   "></AiFillHeart>
              </div>
            ) : (
              <div
                className="tooltip p-0 m-0 h-fit"
                data-tip="Add to favourite"
              >
                <AiOutlineHeart
                  className="text-2xl  p-0 m-0 cursor-pointer"
                  onClick={handleFavouriteButton}
                ></AiOutlineHeart>
              </div>
            )}
          </div>
        </div>
        <div className="card-body lg:col-span-2">
          <h2 className="card-title font-bold text-3xl">{recipe_name}</h2>

          {/* indegredients */}
          <div className="space-x-2 font-medium">
            <span className="text-lg font-bold">Ingedients: </span>
            {ingredients &&
              ingredients?.map((ingredient, index) => (
                <span key={index}>{ingredient}</span>
              ))}
          </div>

          {/* cooking Method */}
          <div className="space-x-2 font-medium">
            <span className="text-lg font-bold">Cookie Methods: </span>
            {cooking_method &&
              cooking_method?.map((method, index) => (
                <span key={index}>{method}</span>
              ))}
          </div>

          {/* rating */}
          <div className="flex items-center gap-2">
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

export default SingleRecipeCard;
