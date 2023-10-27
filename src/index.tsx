import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

createRoot(document.getElementById("root") !).render(
    <RouterProvider router={router} />
  );

/*
const rootElement = document.getElementById("root");
render(<App />, rootElement);*/
