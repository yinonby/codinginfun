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
        path: "/codesandbox/:courseName/:chapterName/:lessonName/:exerciseName",
        element: <App codesandbox={true}/>,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName",
        element: <App />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName",
        element: <App />,
    },
    {
        path: "/exercises/:courseName/:chapterName",
        element: <App />,
    },
    {
        path: "/exercises/:courseName",
        element: <App />,
    },
    {
        path: "/exercises",
        element: <App />,
    },
]);

createRoot(document.getElementById("root") !).render(
    <RouterProvider router={router} />
  );

/*
const rootElement = document.getElementById("root");
render(<App />, rootElement);*/
