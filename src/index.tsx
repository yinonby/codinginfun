
import Box from '@mui/material/Box';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useParams,
} from "react-router-dom";
import './index.css';
import ExerciseContentPage from "./react/pages/ExerciseContentPage";
import ExercisePage from "./react/pages/ExercisePage";

const appStyle = {
  fontFamily: "sans-serif",
};

const OldBPTSExerciseRedirect = () => {
  const { courseName, chapterName, lessonName, exerciseName,
    taskId } = useParams();
  let url = "/o/exercises/ts/bp/";

  if (chapterName) {
    url += chapterName + "/";
  }
  if (lessonName) {
    url += lessonName + "/";
  }
  if (exerciseName) {
    url += exerciseName + "/"
  }
  if (taskId) {
    url += taskId + "/";
  }
  return <Navigate to={url} replace />
}

const router = createBrowserRouter([
  {
    path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/exercises/:courseName/:chapterName/:lessonName/:exerciseName",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/exercises/:courseName/:chapterName/:lessonName",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/exercises/:courseName/:chapterName",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/exercises/:courseName",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/exercises",
    element: <OldBPTSExerciseRedirect />,
  },
  {
    path: "/o/codesandbox/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
    element: <ExerciseContentPage />,
  },
  {
    path: "/o/exercises/:progLang/:courseName/:chapterName/:lessonName/:exerciseName/:taskId",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises/:progLang/:courseName/:chapterName/:lessonName/:exerciseName",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises/:progLang/:courseName/:chapterName/:lessonName",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises/:progLang/:courseName/:chapterName",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises/:progLang/:courseName",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises/:progLang",
    element: <ExercisePage />,
  },
  {
    path: "/o/exercises",
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

