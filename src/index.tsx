
import ExercisePage from "./pages/ExercisePage";
import { createRoot } from "react-dom/client";
import Box from '@mui/material/Box';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ExerciseContentPage from "./pages/ExerciseContentPage";
import './index.css';

const appStyle = {
    fontFamily: "sans-serif",
}

const router = createBrowserRouter([
    {
        path: "/codesandbox/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
        element: <ExerciseContentPage />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
        element: <ExercisePage />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName",
        element: <ExercisePage />,
    },
    {
        path: "/exercises/:courseName/:chapterName/:lessonName",
        element: <ExercisePage />,
    },
    {
        path: "/exercises/:courseName/:chapterName",
        element: <ExercisePage />,
    },
    {
        path: "/exercises/:courseName",
        element: <ExercisePage />,
    },
    {
        path: "/exercises",
        element: <ExercisePage />,
    },
    {
        path: "/",
        element: <ExercisePage />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <Box style={appStyle}>
        <RouterProvider router={router} />
    </Box>
);

