
import MultiChoiceExerciseTestAbs, {
  MultiChoiceAnswer,
} from "#infra/test/MultiChoiceExerciseTestAbs";
import { Grid } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React from "react";
import CheckAnswerButton from "../CheckAnswerButton";
import {
  ExplainedTestResult,
} from "../ExplainedTestResultView";

export function MultiChoiceTaskView(props: any) {
  const exerciseTest: MultiChoiceExerciseTestAbs = props.exerciseTest;
  const mcAnswers: MultiChoiceAnswer[] = exerciseTest.getMcAnswers();
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIdxStr: string = (event.target as HTMLInputElement).value;
    setSelectedIdx(+selectedIdxStr);
  };

  const handleCheckAnswer = () => {
    let passed: boolean = true;

    console.clear();
    console.log("Running all tests:");

    if (selectedIdx === exerciseTest.getCorrectAnswerIdx()) {
      console.log("Answer is correct :)");
    } else {
      console.log("Answer is incorrect :(");
      passed = false;
    }

    const tmpExplainedTestResult: ExplainedTestResult = {
      run: true,
      passed: passed,
      expectedSolutionText: exerciseTest.getExpectedSolutionText(),
      explanation: exerciseTest.getMcAnswerExplanationMd(selectedIdx!),
    };
    return tmpExplainedTestResult;
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Your answer
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={selectedIdx}
            onChange={handleChange}
          >
            {mcAnswers.map((e, index) => 
              <FormControlLabel key={index}
                value={index} control={<Radio />} label={e.mcAnswerMd} />
            )}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <CheckAnswerButton
          buttonText="Check your answer"
          disabled={selectedIdx === null}
          onCheckAnswer={handleCheckAnswer}
          currentSolutionText=""
          okMessage="Your answer is correct!"
          errPrefix="Wrong answer"
        />
      </Grid>
    </Grid>
  );
}
