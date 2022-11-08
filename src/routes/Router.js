import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404PageNotFound from "../pages/404/404";
import Aboutpage from "../pages/About/About";
import Home from "../pages/Home/Home";
import Productpage from "../pages/ProductPage/ProductPage";

// creation of a path for each link Added /home for users who might type the link directly.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
      {
        path: "/products/:id",
        element: <Productpage />,
      },
      {
        path: "*",
        element: <Error404PageNotFound />,
      },
    ],
  },
]);
