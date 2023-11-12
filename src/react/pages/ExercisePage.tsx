
import * as React from 'react';
import Box from '@mui/material/Box';
import { useParams, useNavigate } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";
import Header, { Content } from "../components/Header";
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";
import ExerciseContent from '../components/ExerciseContent';
import SolutionButton from "../components/SolutionButton";
import ExerciseTask from '../../infra/task/ExerciseTask';
import TaskSelect from '../components/TaskSelect';
import ExerciseMgrAdapter from '../../infra/mgr/ExerciseMgrAbs';

export default function ExercisePage(props: any) {
  const params = useParams();
  const navigate = useNavigate();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";

  React.useEffect(() => {
    if (exerciseName && !taskIdStr) {
      navigate("/exercises/" + courseName + "/" + chapterName + "/" +
        lessonName + "/" + exerciseName + "/0");
    }
  });

  if (exerciseName && !taskIdStr) {
    return null;
  }

  const { codesandbox } = props;
  const containerStyle = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  }

  return (
    <>
      <Header />
      <Content>
        <Box mx={2} sx={{ height: "100%" }}>
          {!codesandbox &&
            <Box sx={containerStyle}>
              <h1>Student Exercises:</h1>
              <Box mb={2} >
                <ExerciseSelect />
              </Box>
              {exerciseName && taskIdStr &&
                <>
                  <ExerciseTitle />
                  <Box mb={2} >
                    <TaskSelect />
                  </Box>
                  <Box mb={2} sx={{ flex: 1 }} >
                    {exerciseName && taskIdStr && <ActualContent />}
                  </Box>
                </>
              }
            </Box>
          }
          {codesandbox && exerciseName && taskIdStr && <Exercise />}
        </Box>
      </Content>
    </>
  );
}

function ExerciseTitle() {
  const params = useParams();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";

  const exerciseMap = new ExerciseMap();

  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName, chapterName,
      lessonName, exerciseName);
  if (!exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }
  const exerciseMgr: ExerciseMgrAdapter = exerciseItem.exerciseMgr;

  return (
    <h3>{exerciseMgr.getTitle()}</h3>
  );
}

function ActualContent() {
  const params = useParams();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";
  const taskId: number = Number(taskIdStr);
  const codesandboxContainerStyle = {
    borderRight: "1px solid black",
    borderRadius: "4px",
    flex: 1,
  }

  const exerciseMap = new ExerciseMap();
  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName, chapterName,
      lessonName, exerciseName);
  if (!exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }

  const exerciseTask: ExerciseTask =
    exerciseItem.exerciseMgr.getTasks()[taskId];
  const exercieInfo: ExerciseInfoAbs = exerciseTask.getInfo();

  if (exercieInfo.getType() !== EX_TYPE.EX_TYPE_SANDBOX) {
    return <ExerciseContent showSolutionButton />;
  } else {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box sx={codesandboxContainerStyle} mb={2}>
          <CodeSandboxIFrame />
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
        }}>
          <SolutionButton />
        </Box>
      </Box>
    );
  }

}
