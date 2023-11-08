import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "../router/router";
import AuthContext from "../context/AuthContext";
import { HelmetProvider } from "react-helmet-async";
// import { PDFViewer } from "@react-pdf/renderer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <PDFViewer> */}
      <AuthContext>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AuthContext>
    {/* </PDFViewer> */}
  </React.StrictMode>
);
