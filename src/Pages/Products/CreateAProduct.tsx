import PageTitle from "@/PageTitleHelmet/PageTitle";
import { useAddProductsMutation } from "@/redux/api/baseApi";
import { TPro } from "@/Types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProductForm = () => {
  const navigate = useNavigate();
  const [isDirty, setIsDirty] = useState(false); // Track form dirty state

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty: formIsDirty },
  } = useForm<TPro>({
    defaultValues: {
      price: 10,
      stock: 1,
    },
  });

  const [addProduct] = useAddProductsMutation();

  const onSubmit = async (values: TPro) => {
    try {
      const res = await addProduct(values).unwrap();
      console.log(res);
      toast.success("Product added successfully!");
      navigate("/products");
    } catch (error) {
      console.error("Failed to add product:", error);
      toast.error("Failed to add product.");
    }
  };

  // Track form changes
  useEffect(() => {
    setIsDirty(formIsDirty);
  }, [formIsDirty]);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isDirty) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes. Are you sure you want to leave?";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md lg:my-28 lg:w-2/4">
      <PageTitle title="Create Product | Max Fit" />
      <div className="flex justify-center font-extrabold text-lg mb-5">
        <h1>Create Product</h1>
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
            {...register("name", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && (
            <span className="text-red-600">Name is required</span>
          )}
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
            {...register("price", { required: true, valueAsNumber: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.price && (
            <span className="text-red-600">Price is required</span>
          )}
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
            {...register("description", { required: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.description && (
            <span className="text-red-600">Description is required</span>
          )}
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
            {...register("category", { required: true })}
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
          {errors.category && (
            <span className="text-red-600">Product Category is required</span>
          )}
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
            {...register("stock", { required: true, valueAsNumber: true })}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.stock && (
            <span className="text-red-600">Stock is required</span>
          )}
        </div>

        <input
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
        />
      </form>
    </div>
  );
};

export default ProductForm;
