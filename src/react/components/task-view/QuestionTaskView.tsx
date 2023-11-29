import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";
import { Grid, TextField } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import { ExplainedTestResult } from "../ExplainedTestResultView";

export function QuestionTaskView(props: any) {
  const exercieTest: QuestionExerciseTestAbs = props.exercieTest;
  const [solutionText, setSolutionText] = useState("");
  const [explainedTestResult, setExplainedTestResult] = useState({
    run: false,
    passed: false,
    expectedSolutionText: "",
    explanation: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSolutionText(event.target.value);
  }

  const handleCheckAnswer = () => {
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

    const tmpExplainedTestResult: ExplainedTestResult = {
      run: true,
      passed: passed,
      expectedSolutionText: exercieTest.getExpectedSolutionText(),
      explanation: exercieTest.getExpectedSolutionExplanation(),
    };
    return tmpExplainedTestResult;
  };

  const rowNum: number = exercieTest.getExpectedSolutionRowNum();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <TextField
          fullWidth
          id="coding-question-text-field"
          label="Your Answer"
          multiline
          rows={rowNum}
          value={solutionText}
          onChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CheckAnswerButton
            buttonText="Check your answer"
            onCheckAnswer={handleCheckAnswer}
            currentSolutionText={solutionText}
            okMessage="Your answer is correct!"
            errPrefix="Wrong answer"
          />
        </Box>
      </Grid>
    </Grid>
  );
}
