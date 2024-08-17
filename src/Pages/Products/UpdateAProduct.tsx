import PageTitle from "@/PageTitleHelmet/PageTitle";
import {
  useGetSingleProductsQuery,
  useUpdateProductsMutation,
} from "@/redux/api/baseApi";

import { TPro } from "@/Types";

import { useForm } from "react-hook-form";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const UpdateAProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams(); // Extract 'id' from the params

  // Fetch the single product data
  const { data } = useGetSingleProductsQuery(id);

  // Initialize the mutation hook
  const [updateProduct] = useUpdateProductsMutation();

  // if (isLoading) {
  //   return (
  //     <h1 className="text-2xl text-yellow-300 flex justify-center items-start">
  //       <Loaderspinner />
  //     </h1>
  //   );
  // }

  // Initialize the form with the fetched data
  const { register, handleSubmit } = useForm<TPro>({
    values: data?.data,
    resetOptions: {
      keepDirtyValues: true, // keep dirty fields unchanged, but update defaultValues
    },
  });

  const onSubmit = async (data: TPro) => {
    // const { name, price, category, description, stock ,image} = data;
    // const product = {
    //   name: name,
    //   price: price,
    //   category: category,
    //   description: description,
    //   stock: stock,
    //   image: image,
    // };

    try {
      const res = await updateProduct({ id, data }); // Pass 'id' and 'data'
      console.log(res);
      toast.success("Product updated successfully!");
      navigate("/products"); // Navigate to another page after successful submission
    } catch (error) {
      console.error("Failed to update product:", error);
      toast.error("Failed to update product.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md lg:my-28 lg:w-2/4">
      <PageTitle title="Update Product | Max Fit" />
      <div className="flex justify-center font-extrabold text-lg mb-5">
        <h1>Update Product</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Product Name"
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            id="price"
            type="number"
            placeholder="Price"
            {...register("price")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="Description"
            {...register("description")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            id="image"
            type="text"
            placeholder="Image"
            {...register("image")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            {...register("category")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Category</option>
            <option value="Leg Extension machine">Leg Extension machine</option>
            <option value="Chest press">Chest press</option>
            <option value="Lat pulldown">Lat pulldown</option>
            <option value="Treadmill">Treadmill</option>
            <option value="Dumbbells">Dumbbells</option>
            <option value="Rowing machine">Rowing machine</option>
            <option value="StairMaster">StairMaster</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="stock"
            className="block text-sm font-medium text-gray-700"
          >
            Stock
          </label>
          <input
            id="stock"
            type="number"
            placeholder="Stock"
            {...register("stock")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
};

export default UpdateAProduct;
