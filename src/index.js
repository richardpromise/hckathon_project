import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import Contact from "./components/contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RegisterPage from "./components/register";

const App = lazy(() => import("./App"));
const Contact = lazy(() => import("./components/contact"));
const RegisterPage = lazy(() => import("./components/register"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<h1>wait</h1>}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<h1>loading</h1>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<h1>loading</h1>}>
        <RegisterPage />
      </Suspense>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
