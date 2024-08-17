import { TPro } from "@/Types";
import { Link } from "react-router-dom";

const FeaturedCard = ({ product }: { product: TPro }) => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden m-4 h-auto flex flex-col items-center">
      <figure className="relative h-48  overflow-hidden flex items-center justify-center">
        <img
          src={product?.image || "default-image-url.jpg"}
          alt={product?.name || "Product"}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-lg font-bold">{product?.name}</h2>
        {/* <p>{product?.description || "No description available."}</p> */}

        {product?.description.length > 30
            ? `${product.description.substring(0, 25)}...`
            : product.description  || "No description available."}
        <div className="card-actions mt-4 flex justify-center">
          <Link to={`/product/${product?._id}`}>
            <button className="btn text-white bg-[#02c39a] hover:bg-[#028978]">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
