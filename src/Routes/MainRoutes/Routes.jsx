import {  createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../../Pages/Home/Home";

import SignIn from "../../Pages/SignIn/SignIn";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      }
    ],
  },
]);

export default Routes;
