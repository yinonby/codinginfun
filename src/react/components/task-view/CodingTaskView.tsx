import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";
import { Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import CodeEditor from "../CodeEditor";
import { ExplainedTestResult } from "../ExplainedTestResultView";
import SolutionButton from "../SolutionButton";

export function CodingTaskView(props: any) {
  const exerciseTest: CodingExerciseTestAbs = props.exerciseTest;
  const initialSolutionText: string = exerciseTest.getInitialSolutionText();
  const [solutionText, setSolutionText] = useState(initialSolutionText);

  const handleEditorChange = (value: string) => {
    setSolutionText(value);
  };

  const handleCheckAnswer = () => {
    let passed: boolean = true;

    console.clear();
    console.log("Running all tests:");

    try {
      const cleanSolutionText = solutionText.replaceAll("\r", "");
      console.log("Verifying your code...");
      exerciseTest.verify(cleanSolutionText);
      console.log("Verifying your code... ok");
    } catch (e) {
      passed = false;
      console.log("Verifying your code... failed");
    }

    if (passed) {
      console.log("All tests succeeded :)");
    } else {
      console.log("Some tests failed :(");
    }

    const tmpExplainedTestResult: ExplainedTestResult = {
      run: true,
      passed: passed,
      expectedSolutionText: exerciseTest.getExpectedSolutionText(),
      explanation: exerciseTest.getExpectedExplanationMd(),
    };
    return tmpExplainedTestResult;

  };

  const handleReset = () => {
    setSolutionText(initialSolutionText);
  }

  const rowNum: number = exerciseTest.getExpectedSolutionRowNum();
  const height: number = 19 * rowNum;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <Box mb={2} sx={{
          height: height + "px",
          borderRadius: "4px",
          overflow: "hidden"
        }}>
          <CodeEditor value={solutionText}
            path="code.ts"
            onChange={handleEditorChange} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box mr={2} >
            <CheckAnswerButton
              isBlockquote
              buttonText="Check your solution"
              onCheckAnswer={handleCheckAnswer}
              currentSolutionText=""
              okMessage="Your solution is correct!"
              errPrefix="Your solution is incorrect"
            />
          </Box>
          <SolutionButton currentSolutionText={solutionText} />
          <Box sx={{ flex: 1 }} />
          <Button onClick={handleReset} variant="contained" size="small"
            color="warning">
            Reset
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
