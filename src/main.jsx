import React from "react";
import "./global.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./services/theme";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/index";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <RouterProvider router={Router} />
    </ChakraProvider>
  </React.StrictMode>
);
