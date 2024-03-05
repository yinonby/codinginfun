
import ExerciseTask from "#infra/task/ExerciseTask";
import ExerciseTestAbs from "#infra/test/ExerciseTestAbs";
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import CodeEditor from './CodeEditor';
import DialogButton from "./DialogButton";
import DiffCodeEditor from './DiffCodeEditor';

export default function SolutionButton(props: any) {
  const params = useParams();
  const { currentSolutionText } = props;
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";
  const [showComparison, setShowComparison] = useState(false);

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
  const exerciseItem: ExerciseItem | null = exerciseMap.getExerciseItem(courseName, chapterName,
    lessonName, exerciseName);
  if (!exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }

  const exerciseTask: ExerciseTask =
    exerciseItem.exerciseMgr.getTask(taskId);
  const exerciseTest: ExerciseTestAbs = exerciseTask.getTest();
  const expectedSolutionText = exerciseTest.getExpectedSolutionText();
  const handleClick = () => {
    setShowComparison(!showComparison);
  }
  const handleClose = () => {
    setShowComparison(false);
  }

  return (
    <DialogButton dialogTitle="Solution"
      dialogProps={{ maxWidth: "xl" }}
      buttonText="Show correct solution"
      onClose={handleClose}>
      {currentSolutionText !== undefined &&
        <Box mb={2}>
          <Button variant="outlined" onClick={handleClick}
            size="small">
            {showComparison ? "Show correct solution only" :
              "Compare this correct solution to my code"}
          </Button>
        </Box>
      }
      <Box sx={{
        height: "300px",
        border: "1px solid black",
        borderRadius: "4px",
      }}>
        {!showComparison &&
          <CodeEditor value={expectedSolutionText}
            path="current-code.ts"
            readOnly
          />
        }
        {showComparison &&
          <DiffCodeEditor original={expectedSolutionText}
            modified={currentSolutionText}
          />
        }
      </Box>
    </DialogButton>
  );
}
