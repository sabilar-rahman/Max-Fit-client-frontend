import { NavLink } from "react-router-dom";

const FinishedSuccessfully = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl max-w-lg w-full text-center border border-gray-200">
        <div className="bg-green-100 p-4 rounded-full inline-block mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-12 text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
            />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4">
          Order Placed Successfully!
        </h1>
        <p className="text-gray-600 mb-6 text-base md:text-lg">
          Thank you for your purchase. Your order has been successfully placed.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          {/* Uncomment this if you want to use the "Go to Homepage" button */}
          {/* <NavLink to="/">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
              Go to Homepage
            </button>
          </NavLink> */}
          <NavLink to="/products">
            <button className="  text-white bg-[#02c39a] hover:bg-[#028978]  py-3 px-6 rounded-lg shadow-md  transition duration-300">
              Continue Shopping
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FinishedSuccessfully;
