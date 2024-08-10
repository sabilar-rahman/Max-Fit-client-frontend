import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
// import store from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Toaster } from 'sonner'
import { persistor, store } from "./redux/store.ts";

import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}/>
      <Toaster richColors />
      <RouterProvider router={router}></RouterProvider>

     
    </Provider>
  </React.StrictMode>
);
