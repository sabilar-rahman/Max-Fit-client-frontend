import PageTitle from "@/PageTitleHelmet/PageTitle";
import { useCreateOrderMutation } from "@/redux/api/baseApi";
import { clearCart } from "@/redux/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "sonner";

interface ICheckoutFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
  payment: string;
}

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDirty, setIsDirty] = useState(false);

  const cart = useAppSelector((state: RootState) => state.cart);
  const [newOrder] = useCreateOrderMutation();

  const {
    register,
    handleSubmit,
    formState: { isDirty: formIsDirty },
  } = useForm<ICheckoutFormInputs>();

  const onSubmit: SubmitHandler<ICheckoutFormInputs> = async (
    data: unknown
  ) => {
    const orderData = {
      user: data,
      cart: cart.items,
    };
    // console.log("Order Data:", orderData);
    try {
      await newOrder(orderData).unwrap;
      dispatch(clearCart());
      toast.success("Order confirmed");
      navigate("/finishedSuccessfully");
      console.log("Order Data:", newOrder);
    } catch (err) {
      toast.error("Something went wrong");
      console.error("Failed to place the order:", err);
      // alert("Failed to place the order. Please try again.");
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
      <PageTitle title="Checkout | Max Fit" />
      <div className="flex justify-center font-extrabold text-lg mb-5">
        <h1>Checkout Here</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Enter Your Email Address"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="text"
              {...register("phone")}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Enter Your Contact number"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <textarea
              {...register("address")}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Enter Your Address for delivery"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Payment Option</h2>
            <div>
              <label className="block mb-2">
                <input
                  type="radio"
                  value="cash"
                  {...register("payment")}
                  className="mr-2"
                  required
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          <div className="form-control mt-6 w-1/4">
            <button
              disabled={cart.items.length === 0}
              className="btn text-white bg-[#02c39a] hover:bg-[#028978]"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
