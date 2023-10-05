
import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Career from "../Pages/Career";
import PrivateRoute from "../Pages/PrivateRoute";
import NewsDetails from "../Pages/newsDetails";
import PrivateRouteForNewsDetails from "../Pages/PrivateRouteForNewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/news.json"),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: (
          <PrivateRoute>
            <Login></Login>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRoute>
            <Register></Register>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/news/:id",
        loader: async ({ params }) => {
          const res = await fetch("/news.json");
          const data = await res.json();
          const news = data.find((d) => d._id === params.id);
          return news;
        },
        element: (
          <PrivateRouteForNewsDetails>
            <NewsDetails></NewsDetails>
          </PrivateRouteForNewsDetails>
        ),
      },
    ],
  },
]);

export default router;