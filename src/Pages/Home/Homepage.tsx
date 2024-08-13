import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Featured from "./Featured";
import Benefits from "./Benefits";
import HappyCustomerMosaicView from "./HappyCustomerMosaicView";

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
          Categories
          <hr className="w-20 mt-2 border-[3px] mx-auto border-[#02c39a] " />
        </h1>
        <Categories />
      </div>
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
          Featured Products
          <hr className="w-20 mt-2 border-[3px] mx-auto border-[#02c39a] " />
        </h1>
        <Featured/>
      </div>

      <div className="bg-gray-100 ">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold py-8">
        Benefits of Using Our Gym Products
          <hr className="w-20 mt-2 border-[3px] mx-auto border-[#02c39a] " />
        </h1>
        <Benefits/>
      </div>


      <HappyCustomerMosaicView/>

      


      
    </div>
  );
};

export default Homepage;
