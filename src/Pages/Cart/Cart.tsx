import { removeFromCart, updateCartQuantity } from "@/redux/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { NavLink } from "react-router-dom";
import ZeroCart from "./ZeroCart";

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
import { toast } from "sonner";
import PageTitle from "@/PageTitleHelmet/PageTitle";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state: RootState) => state.cart);

  // total price count
  const totalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.info("Product remove from cart Successfully");
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    dispatch(updateCartQuantity({ id, quantity }));
  };

  return (
    <>
      <div className="p-4 my-8 container mx-auto">
      <PageTitle title="Cart | Max Fit"/>
        {items.length > 0 && (
          <h2 className="font-bold text-4xl leading-10 mb-8 text-center text-black">
            Shopping Cart
          </h2>
        )}
        {items.length === 0 ? (
          <ZeroCart />
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((item) => (
                    <tr key={item._id}>
                      <td className="border px-4 py-2">{item.name}</td>
                      <td className="border px-4 py-2">
                        ${item.price.toFixed(2)}
                      </td>
                      <td className="border px-4 py-2">
                        <div className="flex items-center justify-center">
                          <button
                            className=" btn text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  rounded-lg text-sm   text-center  dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-800"
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300  rounded-lg text-sm   text-center  dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                            onClick={() =>
                              handleUpdateQuantity(item._id, item.quantity + 1)
                            }
                            disabled={item.quantity >= item.stock}
                          >
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
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="border px-4 py-2 text-center">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="border px-4 py-2 text-center">
                        {/* 
                        <button
                          className="btn btn-error btn-xs"
                          onClick={() => handleRemoveFromCart(item._id)}
                        >
                          Remove
                        </button> */}

                        <button className="text-red-500 hover:text-red-700 ">
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
                                  onClick={() =>
                                    handleRemoveFromCart(item._id!)
                                  }
                                  className="bg-red-500 hover:bg-red-700"
                                >
                                  Continue
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
              <h2 className="text-2xl mb-2 sm:mb-0">
                Total: ${totalPrice().toFixed(2)}
              </h2>
              <NavLink to="/checkout">
                <button className="btn  text-white bg-[#02c39a] hover:bg-[#028978]">Proceed to Checkout</button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;

 