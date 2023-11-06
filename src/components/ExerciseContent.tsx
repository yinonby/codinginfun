
import Box from '@mui/material/Box';
import ExerciseMap, { ExerciseItem } from "../exercises/ExerciseMap";
import ExerciseInfoAbs, { EX_TYPE } from "../exercises/ExerciseInfoAbs";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import { useParams } from 'react-router-dom';
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import Markdown from "./Markdown";
import { Grid } from "@mui/material";
import ExerciseMgrAdapter from "../exercises/ExerciseMgrAbs";
import ExerciseTask from "../exercises/ExerciseTask";
import { CodingTaskView } from "./CodingTaskView";
import { CodesandboxTaskView } from "./CodesandboxTaskView";
import { QuestionTaskView } from './QuestionTaskView';

export default function ExerciseContent(props: any) {
    const { showSolutionButton } = props;
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
            <TaskView exerciseTask={exerciseTask}
                showSolutionButton={showSolutionButton} />
        </Box>
    );
}

function TaskView(props: any) {
    const { exerciseTask, showSolutionButton } = props;
    const exercieInfo: ExerciseInfoAbs = exerciseTask.getInfo();
    const exercieTest: ExerciseTestAdapter | TextExerciseTestAdapter =
        exerciseTask.getTest();
    const taskTypeStr: string = exercieInfo.getTaskTypeStr();

    return (
        <Box>
            <h4>{taskTypeStr}</h4>
            {exercieInfo.getType() === EX_TYPE.EX_TYPE_CODING &&
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                      <Instructions exercieInfo={exercieInfo} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                      <CodingTaskView exercieTest={exercieTest}
                          showSolutionButton={showSolutionButton}/>
                  </Grid>
              </Grid>
            }

            {exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX &&
                <>
                    <Box mb={2}>
                        <Instructions exercieInfo={exercieInfo} />
                    </Box>
                    <Box mb={2}>
                        <CodesandboxTaskView exercieTest={exercieTest}
                            showSolutionButton={showSolutionButton}/>
                    </Box>
                </>
            }

            {exercieInfo.getType() === EX_TYPE.EX_TYPE_QUESTION &&
                <>
                    <Box mb={2}>
                        <Instructions exercieInfo={exercieInfo} />
                    </Box>
                    <Box mb={2}>
                        <QuestionTaskView exercieTest={exercieTest}
                            showSolutionButton={showSolutionButton}/>
                    </Box>
                </>
            }
        </Box>
    );
}

function Instructions(props: any) {
    const exercieInfo: ExerciseInfoAbs = props.exercieInfo;
    const md = exercieInfo.getMdInstructions()
        .replaceAll("<<", "**`")
        .replaceAll(">>", "`**");

    return (
        <Markdown>
            {md}
        </Markdown>
    );
}
