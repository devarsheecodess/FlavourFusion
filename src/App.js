import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/details/:id",
      element: (
        <>
          <Details />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
