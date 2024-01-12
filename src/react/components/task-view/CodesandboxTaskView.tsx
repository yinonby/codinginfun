import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RunnableCodingExerciseTestAbs from "#infra/test/RunnableCodingExerciseTestAbs";
import SolutionButton from "../SolutionButton";
import { TestResult } from "../TestResultView";
import TestResultView from '../TestResultView';
import { Grid } from "@mui/material";
import CodeSandboxIFrame from "../CodeSandboxIFrame";
import CheckAnswerButton from "../CheckAnswerButton";

export function CodesandboxTaskView(props: any) {
  const exercieTest: RunnableCodingExerciseTestAbs = props.exercieTest;
  const [testResult, setTestResult] = useState({
    run: false,
    passed: false,
    errMessage: "",
  });

  const handleClick = () => {
    let passed: boolean = true;
    let errorMessage: string = "";

    console.clear();
    console.log("Running all tests:");

    try {
      console.log("Verifying your code...");
      exercieTest.verify();
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
      try {
        console.log("Running your code...");
        console.log("----- Output start -----");
        exercieTest.run();
        console.log("----- Output end -------");
        console.log("Running your code... ok");
      } catch (e) {
        console.log("----- Output end -------");
        console.log("Running your code... failed");
        passed = false;
        if (e instanceof Error) {
          const err: Error = e;
          errorMessage = err.message;
        }
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
  
  const codesandboxContainerStyle = {
    borderRight: "1px solid black",
    borderRadius: "4px",
    flex: 1,
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "60vh" }}>
          <Box sx={codesandboxContainerStyle} mb={2}>
            <CodeSandboxIFrame />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <SolutionButton />
      </Grid>
    </Grid>
  );

}
