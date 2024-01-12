
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";
import Box from '@mui/material/Box';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import ExerciseMgrAdapter from '../../infra/mgr/ExerciseMgrAbs';
import ExerciseTask from '../../infra/task/ExerciseTask';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseContent from "../components/ExerciseContent";
import ExerciseSelect from "../components/ExerciseSelect";
import Header, { Content } from "../components/Header";
import SolutionButton from "../components/SolutionButton";
import TaskSelect from '../components/TaskSelect';

export default function ExercisePage(props: any) {
  const params = useParams();
  const navigate = useNavigate();
  const progLang: string = params.progLang || "";
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";

  React.useEffect(() => {
    if (exerciseName && !taskIdStr) {
      navigate("/o/exercises/" + progLang + "/" + courseName + "/" +
        chapterName + "/" + lessonName + "/" + exerciseName + "/0");
    }
  });

  if (exerciseName && !taskIdStr) {
    return null;
  }

  const { isCodesandboxPath } = props;
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
          {!isCodesandboxPath &&
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
                  <Box pb={4} sx={{ flex: 1 }} >
                    {exerciseName && taskIdStr && <ActualContent />}
                  </Box>
                </>
              }
            </Box>
          }
          {isCodesandboxPath && exerciseName && taskIdStr &&
            <ExerciseContent />
          }
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
  return <ExerciseContent />;
}
