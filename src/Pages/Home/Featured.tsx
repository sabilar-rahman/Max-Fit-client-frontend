
import Loaderspinner from "@/loading/Loaderspinner";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import {NavLink } from "react-router-dom";
import FeaturedCard from "./FeaturedCard";
import { TPro } from "@/Types";

const Featured = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const products = data?.data.slice(0, 3);
  console.log(products);

  if (isLoading) {
    return (
      <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
        <Loaderspinner />
      </h1>
    );
  }

  return (


    <div className="container mx-auto mb-4">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-2">
        {products.map((product: TPro) => (
          <FeaturedCard key={product?._id} product={product} />
        ))}
      </div>

      <div className="card-actions justify-center">
        <NavLink to={`/products`}>
          <button className="btn text-white bg-[#02c39a] hover:bg-[#028978]">
            Explore More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Featured;
