import { TPro } from "@/Types";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }: { product: TPro }) => {
  return (
    // <div className="card bg-base-100 shadow-lg rounded-lg overflow-hidden m-4 h-auto">
    //   <figure className="relative h-48 w-full bg-gray-200 overflow-hidden">
    //     <img
    //       src={product?.image || "default-image-url.jpg"}
    //       alt={product?.name || "Product"}
    //       className="object-cover w-full h-full"
    //     />
    //   </figure>
    //   <div className="card-body p-4">
    //     <h2 className="text-xl font-semibold mb-2">{product?.name}</h2>
    //     <h3 className="text-lg font-bold text-gray-800 mb-2">Price: {product?.price}$</h3>
    //     <p className="text-gray-600 text-sm">
    //       {product?.description.length > 30
    //         ? `${product.description.substring(0, 25)}...`
    //         : product.description}
    //     </p>
    //     <div className="card-actions mt-4 flex justify-end">
    //       <Link to={`/product/${product?._id}`}>
    //         <button className="btn text-white bg-[#02c39a] hover:bg-[#028978] py-2 px-4 rounded-md">
    //           View Details
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    // <div className="card shadow-lg rounded-lg m-4 h-3/4">
    //   <figure className="2/4">
    //     <img
    //       className="w-32"
    //       src={product?.image}
    //       alt={product?.name || "Product"}
    //     />
    //   </figure>

    //   <div className="card-body">
    //     <h2 className="card-title">{product?.name}</h2>
    //     <p>Price: {product.price}$</p>
    //     <p>
    //       {product?.description.length > 50
    //         ? `${product.description.substring(0, 40)}...`
    //         : product.description}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <Link to={`/product/${product?._id}`}>
    //         <button className="btn text-white bg-[#02c39a] hover:bg-[#028978]">
    //           View Details
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 m-4 h-80  flex flex-col justify-end">

      <div className="relative flex items-center  justify-around overflow-hidden rounded-xl">
        <img
          className="object-cover w-24  justify-center"
          src={product.image}
          alt="Hotel Photo"
        />
      </div>
      

      <div className="mt-1 p-2">
        <h2 className="text-slate-700">{product.name}</h2>
        <p className="mt-1 text-sm text-slate-400">
          {product?.description.length > 30
            ? `${product.description.substring(0, 25)}...`
            : product.description}
        </p>

        <div className="mt-1 flex items-end justify-between">
          <p className="text-lg font-bold text-black-500">${product.price}</p>

          <div className="flex items-center  space-x-1.5 rounded-lg bg-[#02c39a] md:px-1 px-2 py-1.5 text-white duration-100 hover:bg-[#028978]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            {/* <button className="text-sm">View Details</button> */}

          <Link to={`/product/${product?._id}`}>
            <button className="text-sm">
            View Details
           </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;


