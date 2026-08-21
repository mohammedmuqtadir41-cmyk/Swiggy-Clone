import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Utils/Approuter";
import About from "./pages/About";
import Help from "./pages/Help";
import { createBrowserRouter, RouterProvider } from "react-router";
import Error from "./pages/Error";
import Body from "./components/Body";
import Cart from "./pages/Cart";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import RestaurantPage from "./pages/RestaurantPage";

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
