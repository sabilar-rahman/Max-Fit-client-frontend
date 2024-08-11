import { TPro } from "@/Types";
import React from "react";import { Link } from "react-router-dom";

const FeaturedCard = ({ product }: { product: TPro }) => {

  return (
    
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden m-4 h-auto">
    <figure className="relative h-48 w-full bg-gray-200 overflow-hidden">
      <img src={product?.image || "default-image-url.jpg"} alt={product?.name || "Product"} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{product?.name}</h2>
      <p>{product?.description || "No description available."}</p>
      <div className="card-actions justify-end">
        <Link to={`/product/${product?._id}`}>
        <button className="btn text-white bg-[#02c39a] hover:bg-[#028978]">View Details</button>
        </Link>
      </div>
    </div>
  </div>

  );
};

export default FeaturedCard;
