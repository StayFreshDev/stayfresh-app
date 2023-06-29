import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "../src/components/styles/organisms/Header";
import Footer from "../src/components/styles/organisms/Footer";
import Home from "./components/Home";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);