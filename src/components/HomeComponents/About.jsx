import React from "react";

const About = () => {
  return (
    <div className="my-20">
      {/*===============================
              ABOUT US SECTION
        ====================================*/}
      <section className="py-8 sm:py-16 bg-gray-800 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-300">
              About Us
            </h2>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-400">
              We're passionate about food and bringing people together over
              delicious meals.
            </p>
          </div>

          {/*===============================
                ABOUT : MISSION
        ====================================*/}
          <div className="mt-8 sm:mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow-2xl transition-shadow duration-500 hover:shadow-gray-700 rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-gray-900">
                  Our Mission
                </h3>
                <div className="mt-2 text-sm sm:text-base md:text-lg text-gray-500">
                  <p>
                    We believe that food is more than just fuel for the body –
                    it's a way to connect with others, explore new cultures, and
                    celebrate life's moments.
                  </p>
                  <p className="mt-2">
                    Our mission is to inspire people to cook, eat, and share
                    delicious food, and to create a community where everyone
                    feels welcome and included.
                  </p>
                </div>
              </div>
            </div>
            {/*===============================
               ABOUT : OUR TEAM
            ====================================*/}
            <div className="bg-white overflow-hidden  rounded-lg shadow-2xl transition-shadow duration-500 hover:shadow-gray-700">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-gray-900">
                  Our Team
                </h3>
                <div className="mt-2 text-sm sm:text-base md:text-lg text-gray-500">
                  <p>
                    Our team is made up of food lovers, chefs, and creative
                    professionals who are passionate about sharing their
                    knowledge and expertise with others.
                  </p>
                  <p className="mt-2">
                    We're dedicated to creating high-quality content that's both
                    inspiring and accessible, and we're always looking for ways
                    to improve and innovate.
                  </p>
                </div>
              </div>
            </div>

            {/*===============================
               ABOUT : OUR VALUES
            ====================================*/}
            <div className="bg-white overflow-hidden rounded-lg shadow-2xl transition-shadow duration-500 hover:shadow-gray-700">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl leading-6 font-medium text-gray-900">
                  Our Values
                </h3>
                <div className="mt-2 text-sm sm:text-base md:text-lg text-gray-500">
                  <p>
                    At our core, we believe in the power of food to bring people
                    together, to create community, and to nourish both body and
                    soul.
                  </p>
                  <p className="mt-2">
                    We're committed to using sustainable ingredients, supporting
                    local farmers and producers, and reducing food waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
