import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "@/pages/auth/login";
import Profile from "@/pages/profile";
import ProtectedRoutes from "./protected-routes";
import Register from "@/pages/auth/register";

export default function Router() {
    const router = createBrowserRouter([
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "*",
            element: <div>404 page not found</div>,
          },
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  }