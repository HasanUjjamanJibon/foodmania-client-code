import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "/favicon.png";

const Footer = () => {
  return (
    <React.Fragment>
      {/*===============================
                  Svg path 
      ====================================*/}
      <div className=" bg-gray-800  relative ">
        <svg
          className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-deep-purple-accent-400"
          preserveAspectRatio="none"
          viewBox="0 0 1440 54"
        >
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
        {/*===============================
                  footer banner
      ====================================*/}
        <div className="px-4 text-slate-100  pt-12 mx-auto container  lg:px-8">
          <div className="grid gap-16 row-gap-10 mb-8  lg:grid-cols-6">
            <div className="md:max-w-md lg:col-span-2">
              <Link
                to="/"
                className=" normal-case text-2xl font-bold flex items-center"
              >
                <img src={logo} className="h-10 w-auto mr-3" alt={logo} />
                Food<span className="text-warning">Mania</span>
              </Link>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  At our food website, we're dedicated to sharing the most
                  delicious and nutritious recipes, cooking tips, and food news
                  from around the world. Our team of passionate food lovers is
                  committed to providing you with the best culinary experiences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Basic Information:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Orders and Shipping:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Shipping and Delivery Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Returns and Refunds Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Payment Options
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Entertainment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Portfolio
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Information :
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Nutrition Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Allergen Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Recipe Index
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Cooking Tips and Tricks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Food Safety Information
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Legal Information:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Copyright Notice
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Trademark Information
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*===============================
                bottom  footer 
      ====================================*/}
        <div className="max-w-2xl mx-auto text-slate-100 py-8">
          <div className="text-center">
            <h3 className="text-2xl  mb-3"> Download our Food Recipe app </h3>
            <p className="capitalize"> Eat healthy foods, be healthy </p>
            <div className="flex justify-center flex-wrap my-10">
              <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Google Play Store </p>
                </div>
              </div>
              <div className="flex items-center border w-auto rounded-lg px-4 py-2  mx-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                  className="w-7 md:w-8"
                />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-200">Download on </p>
                  <p className="text-sm md:text-base"> Apple Store </p>
                </div>
              </div>
            </div>
          </div>

          {/*===============================
                Copyright & Social meda 
      ====================================*/}
          <div className="mt-0 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="mt-8 md:mt-0">
              {" "}
              © FoodMania, 2023. All Right Reserved.
            </p>
            {/*===============================
                social media icon  
            ====================================*/}
            <div className="flex items-center gap-2">
              <FaFacebook></FaFacebook>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaYoutube></FaYoutube>
              <FaLinkedinIn></FaLinkedinIn>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
