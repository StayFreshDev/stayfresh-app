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
import Home from "./components/Home";
import EstablishmentsTypePage from "./components/EstablishmentsTypePage";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/establishment", element: <EstablishmentsTypePage />},
  { path: "/inscription", element: <Inscription /> },
  { path: "/connexion", element: <Connexion />},
  { path: "/page-entreprise", element: <PageEntreprise />}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);