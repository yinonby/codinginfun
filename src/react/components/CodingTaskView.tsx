import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";
import SolutionButton from "./SolutionButton";
import CodeEditor from "./CodeEditor";
import { TestResult } from "./TestResultView";
import TestResultView from './TestResultView';

export function CodingTaskView(props: any) {
  const { showSolutionButton } = props;
  const exercieTest: CodingExerciseTestAbs = props.exercieTest;
  const initialSolutionText: string = exercieTest.getInitialSolutionText();
  const [solutionText, setSolutionText] = useState(initialSolutionText);
  const [testResult, setTestResult] = useState({
    run: false,
    passed: false,
    errMessage: "",
  });

  const handleEditorChange = (value: string) => {
    setSolutionText(value);
  };

  const handleClick = () => {
    let passed: boolean = true;
    let errorMessage: string = "";

    console.clear();
    console.log("Running all tests:");

    try {
      const cleanSolutionText = solutionText.replaceAll("\r", "");
      console.log("Verifying your code...");
      exercieTest.verify(cleanSolutionText);
      console.log("Verifying your code... ok");
    } catch (e) {
      passed = false;
      console.log("Verifying your code... failed");
      if (e instanceof Error) {
        const err: Error = e;
        errorMessage = err.message;
      }
    }

    if (passed) {
      console.log("All tests succeeded :)");
    } else {
      console.log("Some tests failed :(");
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
  const height: number = 19 * rowNum;

  return (
    <>
      <Box mb={2}>
        <Box mb={2} sx={{
          height: height + "px",
          borderRadius: "4px",
          overflow: "hidden"
        }}>
          <CodeEditor value={solutionText}
            path="code.ts"
            onChange={handleEditorChange} />
        </Box>
      </Box>
      <Box mb={2} sx={{ display: "flex", flexDirection: "row" }}>
        <Box mr={2}>
          <Button variant="contained" onClick={handleClick}
            size="small">
            Run Tests
          </Button>
        </Box>
        <Box sx={{ flex: 1 }} />
        {showSolutionButton && <SolutionButton
          currentSolutionText={solutionText} />}
      </Box>
      <TestResultView okMessage="Your code is correct!"
        errPrefix="Error"
        testResult={testResult} />
    </>
  );
}
