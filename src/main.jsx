import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes";
import AuthPrivateRoutes from "./routes/AuthPrivateRoutes/AuthPrivateRoutes";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: (
          // private route for authenticated user
          <PrivateRoutes>
            <Home></Home>
          </PrivateRoutes>
        ),
      },
      {
        path: "login",
        element: (
          // private route for non authenticated user
          <AuthPrivateRoutes>
            <Login></Login>
          </AuthPrivateRoutes>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* provider for authentication information */}
    <AuthProvider>
      {/* giving notification */}
      <Toaster />
      {/* react router */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
