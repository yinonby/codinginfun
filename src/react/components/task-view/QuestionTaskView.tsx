import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TestResult } from "../TestResultView";
import TestResultView from '../TestResultView';
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";
import { TextField } from "@mui/material";
import AnswerButton from "../AnswerButton";

export function QuestionTaskView(props: any) {
  const { showSolutionButton } = props;
  const exercieTest: QuestionExerciseTestAbs = props.exercieTest;
  const [solutionText, setSolutionText] = useState("");
  const [testResult, setTestResult] = useState({
    run: false,
    passed: false,
    errMessage: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSolutionText(event.target.value);
  }

  const handleClick = () => {
    let passed: boolean = true;
    let errorMessage: string = "";

    console.clear();
    console.log("Running all tests:");

    try {
      const cleanSolutionText = solutionText.replaceAll("\r", "");
      console.log("Verifying your answer...");
      exercieTest.verify(cleanSolutionText);
      console.log("Verifying your answer... ok");
    } catch (e) {
      passed = false;
      console.log("Verifying your answer... failed");
      if (e instanceof Error) {
        const err: Error = e;
        errorMessage = err.message;
      }
    }

    if (passed) {
      console.log("All answers are correct :)");
    } else {
      console.log("Some answers are incorrect :(");
    }

    const tmpTestResult: TestResult = {
      run: true,
      passed: passed,
      errMessage: "",
    };
    if (passed) {
      tmpTestResult.errMessage = "";
    } else {
      tmpTestResult.errMessage = errorMessage;
    }
    setTestResult(tmpTestResult);

  };
  const rowNum: number = exercieTest.getExpectedSolutionRowNum();

  return (
    <>
      <Box mb={2}>
        <Box mb={2} >
          <TextField
            fullWidth
            id="coding-question-text-field"
            label="Answer"
            multiline
            rows={rowNum}
            value={solutionText}
            onChange={handleChange} />
        </Box>
      </Box>
      <Box mb={2} sx={{ display: "flex", flexDirection: "row" }}>
        <Box mr={2}>
          <Button variant="contained" onClick={handleClick}
            size="small">
            Check your answer
          </Button>
        </Box>
        {showSolutionButton && <AnswerButton
          currentSolutionText={solutionText} />}
      </Box>
      <TestResultView okMessage="Your answer is correct!"
        errPrefix="Wrong answer"
        testResult={testResult} />
    </>
  );
}
