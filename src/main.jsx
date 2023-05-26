import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPages/ErrorPage";
import RootLayout from "./Layouts/RootLayout";
import Blog from "./pages/Blog/Blog";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login";
import Signup from "./pages/Registration/Signup";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import ChefReciepe from "./pages/ChefReciepe/ChefReciepe";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "reciepe/:id",
        element: <ChefReciepe></ChefReciepe>,
        loader: ({ params }) =>
          fetch(`https://food-reciepe-server.vercel.app/chef/${params.id}`),
      },
      // {
      //   path: "reciepe/:id",
      //   element: (
      //     <PrivateRoute>
      //       <ChefReciepe></ChefReciepe>,
      //     </PrivateRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`https://food-reciepe-server.vercel.app/chef/${params.id}`),
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer className="m-0 p-0 absolute" />
  </AuthProvider>
);
