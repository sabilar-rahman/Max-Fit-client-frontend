

import { TPro } from "@/Types";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }: { product: TPro }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-4">
      <figure>
        <img src={product?.image || "default-image-url.jpg"} alt={product?.name || "Product"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p>{product?.description || "No description available."}</p>
        <div className="card-actions justify-end">
          <Link to={`/product/${product?._id}`}>
          <button className="btn text-white bg-[#02c39a] hover:bg-[#028978]">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;


