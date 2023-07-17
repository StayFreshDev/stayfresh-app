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
import EstablishmentList from "./components/EstablishmentList";
import About from "./components/About";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/inscription", element: <Inscription /> },
  { path: "/connexion", element: <Connexion />},
  { path: "/page-entreprise", element: <PageEntreprise />},
  { path: "/connexion", element: <Connexion />},
  { path: "/user", element: <UserPage />},
  { path: "establishments-list", element: <EstablishmentList />},
  { path: "/about", element: <About />}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Head />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);