import { TPro } from "@/Types";

type TProductDetailsProps = {
  product: TPro;
  handleAddToCart: () => Promise<void>;
  isProductOutOfStock: boolean;
};

const ProductDetailsCard = ({
  product,
  handleAddToCart,
  isProductOutOfStock,
}: TProductDetailsProps) => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row p-4 bg-white shadow-lg rounded-lg">
          <div className="w-full md:w-1/2 md:pr-4 flex justify-center">
            <img
              src={product?.image || "default-image-url.jpg"}
              alt={product?.name || "Product"}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-xl font-semibold mb-4">
              Price: {product?.price} $
            </p>
            <p className="text-gray-700 mb-4">Stock:{product?.stock? product.stock : " No Stock Available" }</p>
            <p className="text-gray-700 mb-4">Details: {product?.description}</p>

            <button
            className={`btn text-white font-bold py-2 px-4 rounded transition-colors duration-300 ${
              isProductOutOfStock
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#02c39a] hover:bg-[#028978]"
            }`}
            onClick={handleAddToCart}
            disabled={isProductOutOfStock}
          >
            {isProductOutOfStock ? "Out of Stock" : "Add to Cart"}
          </button>




            {/* <button
              className={`btn bg-[#02c39a] text-white font-bold py-2 px-4 rounded hover:bg-[#076651] ${
                isProductOutOfStock ? "btn-disabled" : "btn-primary"
              }`}
              onClick={handleAddToCart}
              disabled={isProductOutOfStock}
            >
              {isProductOutOfStock ? "Out of Stock" : "Add to Cart"}
            </button> */}




            {/* <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600">
                  Add to Cart
                </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
