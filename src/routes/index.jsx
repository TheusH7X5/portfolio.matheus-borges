import React from "react";
import App from "./../App";

import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import { Techs } from "../pages/Techs";
import Portfolio from "../pages/Portfolio";
import { ErrorPage } from "../pages/ErrorPages";
import Contacts from "../pages/Contacts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/techs",
        element: <Techs />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },

]);

export default Router;
