import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";

import Home from "../components/Home";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ],

  {
    basename: "/sai-portfolio",
  }
);

export default router;
