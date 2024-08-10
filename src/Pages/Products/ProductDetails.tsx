import Loaderspinner from "@/loading/Loaderspinner";
import { useGetSingleProductsQuery } from "@/redux/api/baseApi";
import { setToCart } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

// import { TPro } from "@/Types";

import { useParams } from "react-router-dom";
import { toast } from "sonner";
import ProductDetailsCard from "./ProductDetailsCard";
import { RootState } from "@/redux/store";

const ProductDetails = () => {
  const { id } = useParams(); // Ensure _id matches the param name in your route definition

  const { data, isLoading, error } = useGetSingleProductsQuery(id);
  const product = data?.data; // Ensure this matches how your API response is structured
  console.log(product);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);

  

  if (isLoading) {
    return (
      <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
        <Loaderspinner />
      </h1>
    );
  }

  if (error) {
    // Consider providing more specific error messages based on error object
    return (
      <h1 className="text-2xl text-red-500 flex justify-center items-start">
        Error loading product details.
      </h1>
    );
  }

  const cartItem = cart.items.find((item) => item._id === product._id);

  // const isProductOutOfStock = cartItem
  //   ? cartItem.quantity >= product.stock
  //   : false;



  const isProductOutOfStock = cartItem
    ? cartItem.quantity >= product.stock
    : product.stock <= 0;


    const handleAddToCart = async () => {
      if (!isProductOutOfStock) {
        dispatch(setToCart(product));
        toast.success("Successfully added cart!");
      }
    };

  return (
    <ProductDetailsCard
      product={product}
      handleAddToCart={handleAddToCart}
      isProductOutOfStock={isProductOutOfStock}
    ></ProductDetailsCard>
  );
};

export default ProductDetails;
