
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";
import ExerciseMgrAdapter from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";
import RunnableCodingExerciseTestAbs from "#infra/test/RunnableCodingExerciseTestAbs";
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import Markdown from "./Markdown";
import { CodesandboxTaskView } from "./task-view/CodesandboxTaskView";
import { CodingTaskView } from "./task-view/CodingTaskView";
import { MultiChoiceTaskView } from './task-view/MultiChoiceTaskView';
import { QuestionTaskView } from './task-view/QuestionTaskView';

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
  const exercieInfo: ExerciseInfoAbs = exerciseTask.getInfo();
  const taskTypeStr: string = exercieInfo.getTaskTypeStr();
  const instWidth: number = exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX ?
    3 : 6;
  const contentWidth: number = exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX ?
    9 : 6;

  return (
    <Box>
      <h4>{taskTypeStr}</h4>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={instWidth}>
          <Instructions exercieInfo={exercieInfo} />
        </Grid>
        <Grid item xs={12} sm={12} md={contentWidth}>
          <TaskView exerciseTask={exerciseTask} />
        </Grid>
      </Grid>
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
      {exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX &&
        <CodesandboxTaskView exercieTest={exercieTest} />
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_CODING &&
        <CodingTaskView exercieTest={exercieTest} />
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_QUESTION &&
        <QuestionTaskView exercieTest={exercieTest} />
      }

      {exercieInfo.getType() === EX_TYPE.EX_TYPE_MULTICHOICE &&
        <MultiChoiceTaskView exercieTest={exercieTest} />
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
