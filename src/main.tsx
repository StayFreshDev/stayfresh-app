import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Connexion from "./components/Connexion";
import Header from "./components/template/Header";
import Footer from "./components/template/Footer";
import Inscription from "./components/Inscription";
import PageEntreprise from "./components/PageEntreprise";


const router = createBrowserRouter([
  { path: "/", element: <Connexion /> },
  { path: "/inscription", element: <Inscription /> },
  { path: "/page-entreprise", element: <PageEntreprise />}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);