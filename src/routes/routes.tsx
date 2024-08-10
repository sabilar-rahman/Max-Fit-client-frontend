import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Homepage from "@/Pages/Home/Homepage";
import Products from "@/Pages/Products/Products";
import ProductManagement from "@/Pages/Products/ProductManagement";
import AboutUs from "@/Pages/About Us/AboutUs";
import Cart from "@/Pages/Cart/Cart";
import CreateAProduct from "@/Pages/Products/CreateAProduct";
import ProductDetails from "@/Pages/Products/ProductDetails";
import UpdateAProduct from "@/Pages/Products/UpdateAProduct";
import Checkout from "@/Pages/Cart/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/productManage",
        element: <ProductManagement/>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/addProduct",
        element: <CreateAProduct />,
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateAProduct/>,
      },
      {path: "/product/:id",
        element: <ProductDetails/>,

      }
    
    ],
  },
]);

export default router;
