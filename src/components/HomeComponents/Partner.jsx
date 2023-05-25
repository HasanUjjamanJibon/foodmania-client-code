import React from "react";
import PartnerImage from "./PartnerImage/PartnerImage";

const Partner = () => {
  return (
    <div className="container mx-auto my-20 text-center">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold   border-b-4 border-purple-800 py-2 inline-block ">
          Our Partners
        </h2>
      </div>
      {/* Our Patners */}
      <div className=" gap-6 flex flex-wrap justify-center items-center h-fit my-20">
        <PartnerImage src="https://i.postimg.cc/TPhV8VR5/Screenshot-1-removebg-preview.png" />
        <PartnerImage src="https://i.postimg.cc/prQ8QkB4/Screenshot-2-removebg-preview.png" />
        <PartnerImage src="https://i.postimg.cc/vBV5TGxQ/Screenshot-3-removebg-preview.png" />
        <PartnerImage src="https://i.postimg.cc/rs2xt755/Screenshot-4-removebg-preview.png" />
        <PartnerImage src="https://i.postimg.cc/XvhwnrJH/Screenshot-5-removebg-preview.png" />
        <PartnerImage src="https://i.postimg.cc/3r2gHJH1/Screenshot-6-removebg-preview.png" />
      </div>
    </div>
  );
};

export default Partner;
