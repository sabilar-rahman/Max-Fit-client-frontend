import Loaderspinner from "@/loading/Loaderspinner";
import {
  useDeleteProductsMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { TPro } from "@/Types";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import PageTitle from "@/PageTitleHelmet/PageTitle";

const ProductManagement = () => {
  const { data, isLoading } = useGetProductsQuery({});
  const Products = data?.data;

  const [deleteProduct] = useDeleteProductsMutation();

  console.log(data);
  if (isLoading) {
    return (
      <p className="text-2xl text-yellow-300 flex justify-center items-start">
        <Loaderspinner />
      </p>
    );
  }

  // DELETE Operation

  const handleProductDelete = async (id: string) => {
    // it is for show name to delete spesfic product
    // const productToDelete = Products?.find(product => product._id === _id);
    try {
      const res = await deleteProduct(id);
      console.log(res);
      toast.success("Product delete Successful");
      // toast.promise(
      //   Promise.resolve({ name: productToDelete?.name }), // Use the product name directly here
      //   {
      //     loading: 'Loading...',
      //     success: (product) => `${product.name} has been deleted`,
      //     error: 'Error occurred while deleting the product',
      //   }
      // );
    } catch (error) {
      console.log(error);
      toast.error("Delete Unsuccessful");
    }
  };

  return (
    <div className="container mx-auto min-h-0 lg:min-h-screen">
        <PageTitle title="Product Manage | Max Fit"/>
      <div className="flex justify-center items-center mb-4">
        <Link to={`/addProduct`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Create New Products
          </button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          {/* Table head */}
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Description</th>

              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row 1 */}
            {Products?.map((item: TPro, index: number) => {
              //  const id = item?._id;
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.price}$</td>
                  <td className="px-4 py-2">
                    {item.description.length > 30
                      ? `${item.description.substring(0, 10)}...`
                      : item.description}
                  </td>

                  <td className="px-4 py-2">{item.category}</td>

                  <td className="px-4 py-2">
                    <Link to={`/updateProduct/${item?._id}`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                          />
                        </svg>
                      </button>
                    </Link>

                    <button 
                     className="text-red-500 hover:text-red-700 ml-2">
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently data from server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleProductDelete(item._id!)}
                              className="bg-red-500 hover:bg-red-700"
                            >
                              Continue
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </button>
                  </td>
                  <tr />
                  <tr />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
