
import Box from '@mui/material/Box';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import DialogButton from "./DialogButton";
import ExplainedTestResultView, { ExplainedTestResult } from "./ExplainedTestResultView";

export default function CheckAnswerButton(props: any) {
  const params = useParams();
  const { buttonText, onCheckAnswer } = props;
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const taskIdStr: string = params.taskId || "";
  const emptyExplainedTestResult: ExplainedTestResult = {
    run: false,
    passed: false,
    expectedSolutionText: "",
    explanation: "",
  };
  const [explainedTestResult, setExplainedTestResult] = 
    useState(emptyExplainedTestResult);

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

  const handleClick = () => {
    const tmpExplainedTestResult: ExplainedTestResult = onCheckAnswer();
    setExplainedTestResult(tmpExplainedTestResult);
  }

  const handleClose = () => {
    setExplainedTestResult(emptyExplainedTestResult);
  }

  return (
    <DialogButton
      dialogTitle="Your Answer"
      dialogProps={{
        maxWidth: "xl",
      }}
      buttonText={buttonText}
      buttonProps={{
        size: "small",
        variant: "contained",
        color: "primary",
        disabled: props.disabled,
      }}
      onClose={handleClose}
      onClick={handleClick}>
      <ExplainedTestResultView
        isBlockquote={props.isBlockquote}
        okMessage="Your answer is correct!"
        errPrefix="Wrong answer"
        explainedTestResult={explainedTestResult}
      />
    </DialogButton>
  );
}
