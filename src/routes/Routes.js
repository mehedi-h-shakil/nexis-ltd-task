import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
