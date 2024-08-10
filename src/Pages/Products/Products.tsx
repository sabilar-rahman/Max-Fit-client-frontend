
import { useGetProductsQuery } from "@/redux/api/baseApi";

import ProductsCard from "./ProductsCard";
import { TPro } from "@/Types";
import Loaderspinner from "@/loading/Loaderspinner";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});
  
  // console.log(data);
  if (isLoading) {
    return (
      <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
      <Loaderspinner/>
      </h1>
    );
  }
  

  const { data: products } = data;
  return (
    <div>
      <div>
        <h2>products here</h2>
      </div>
      <div className="grid grid-cols-4">
        {products.map((product: TPro) => (
          <ProductsCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

