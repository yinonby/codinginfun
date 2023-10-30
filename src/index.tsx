
import Exercise from "./pages/Exercise";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ExerciseContent from "./components/ExerciseContent";

const router = createBrowserRouter([
    {
        path: "/codesandbox/:courseName/:chapterName/:lessonName/:exerciseName",
        element: <ExerciseContent />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName",
        element: <Exercise />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName",
        element: <Exercise />,
    },
    {
        path: "/exercises/:courseName/:chapterName",
        element: <Exercise />,
    },
    {
        path: "/exercises/:courseName",
        element: <Exercise />,
    },
    {
        path: "/exercises",
        element: <Exercise />,
    },
    {
        path: "/",
        element: <Exercise />,
    },
]);

createRoot(document.getElementById("root") !).render(
    <RouterProvider router={router} />
  );

/*
const rootElement = document.getElementById("root");
render(<App />, rootElement);*/
