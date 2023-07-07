import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Connexion from "./components/Connexion";
import Footer from "./components/template/Footer";
import Inscription from "./components/Inscription";
import PageEntreprise from "./components/PageEntreprise";
import Home from "./components/Home";
import Head from "./components/template/NavBar/Head";
import UserPage from "./components/UserPage";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/inscription", element: <Inscription /> },
  { path: "/page-entreprise", element: <PageEntreprise />},
  { path: "/connexion", element: <Connexion />},
  { path: "/users/:id", element: <UserPage />}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Head />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);