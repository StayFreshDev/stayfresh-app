import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Connexion from "../src/components/Connexion";
import Header from "../src/components/styles/organisms/Header";
import Footer from "../src/components/styles/organisms/Footer";


const router = createBrowserRouter([
  { path: "/", element: <Connexion /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);