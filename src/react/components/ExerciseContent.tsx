
import Box from '@mui/material/Box';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";
import RunnableCodingExerciseTestAbs from "#infra/test/RunnableCodingExerciseTestAbs";
import { useParams } from 'react-router-dom';
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";
import Markdown from "./Markdown";
import { Grid } from "@mui/material";
import ExerciseMgrAdapter from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import { CodingTaskView } from "./task-view/CodingTaskView";
import { CodesandboxTaskView } from "./task-view/CodesandboxTaskView";
import { QuestionTaskView } from './task-view/QuestionTaskView';
import { MultiChoiceTaskView } from './task-view/MultiChoiceTaskView';

export default function ExerciseContent(props: any) {
  const params = useParams();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";

  if (!exerciseName) {
    console.error("missing exerciseName");
    return <div>Missing exerciseName</div>;
  }
  if (!taskIdStr) {
    console.error("missing taskId");
    return <div>Missing taskId</div>;
  }
  const taskId: number = Number(taskIdStr);

  const exerciseMap = new ExerciseMap();
  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName, chapterName,
      lessonName, exerciseName);
  if (!exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }

  const exercieMgr: ExerciseMgrAdapter = exerciseItem.exerciseMgr;
  const exerciseTasks: ExerciseTask[] = exercieMgr.getTasks();
  const exerciseTask: ExerciseTask = exerciseTasks[taskId];

  return (
    <Box>
      <TaskView exerciseTask={exerciseTask} />
    </Box>
  );
}

function TaskView(props: any) {
  const { exerciseTask } = props;
  const exercieInfo: ExerciseInfoAbs = exerciseTask.getInfo();
  const exercieTest: RunnableCodingExerciseTestAbs | CodingExerciseTestAbs =
    exerciseTask.getTest();
  const taskTypeStr: string = exercieInfo.getTaskTypeStr();

  return (
    <Box>
      <h4>{taskTypeStr}</h4>
      {exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX &&
        <>
          <Box mb={2}>
            <Instructions exercieInfo={exercieInfo} />
          </Box>
          <Box mb={2}>
            <CodesandboxTaskView exercieTest={exercieTest} />
          </Box>
        </>
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_CODING &&
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Instructions exercieInfo={exercieInfo} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CodingTaskView exercieTest={exercieTest} />
          </Grid>
        </Grid>
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_QUESTION &&
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <Instructions exercieInfo={exercieInfo} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <QuestionTaskView exercieTest={exercieTest} />
          </Grid>
        </Grid>
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_MULTICHOICE &&
        <>
          <Box mb={2}>
            <Instructions exercieInfo={exercieInfo} />
          </Box>
          <Box mb={2}>
            <MultiChoiceTaskView exercieTest={exercieTest} />
          </Box>
        </>
      }
    </Box>
  );
}

function Instructions(props: any) {
  const exercieInfo: ExerciseInfoAbs = props.exercieInfo;
  const md = exercieInfo.getMdInstructions();

  return (
    <Markdown md={md} />
  );
}
