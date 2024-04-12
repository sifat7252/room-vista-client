<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/MainRoutes/Routes";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="border max-w-7xl mx-auto">
    <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Routes} />
    </AuthProviders>
  </React.StrictMode>
  </div>
=======
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Routes/MainRoutes/Routes';
import AuthProviders from './Providers/AuthProviders';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={Routes} />
    </AuthProviders>
  </React.StrictMode>
>>>>>>> 0571be587db98e1379988ed623563ceb08f0a3b8
);
