import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/Utils/Approuter";
import About from "./src/pages/About";
import Help from "./src/pages/Help";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./src/pages/Error";
import Body from "./src/components/Body";
import Cart from "./src/pages/Cart";
import Offers from "./src/pages/Offers";
import Signin from "./src/pages/Signin";
import RestaurantPage from "./src/pages/RestaurantPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
