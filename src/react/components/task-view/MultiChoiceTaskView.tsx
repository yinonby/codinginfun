
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MultiChoiceExerciseTestAbs, {
  MultiChoiceAnswer,
} from "#infra/test/MultiChoiceExerciseTestAbs";
import ExplainedTestResultView, {
  ExplainedTestResult,
} from "../ExplainedTestResultView";

export function MultiChoiceTaskView(props: any) {
  const exercieTest: MultiChoiceExerciseTestAbs = props.exercieTest;
  const mcAnswers: MultiChoiceAnswer[] = exercieTest.getMcAnswers();
  const [explainedTestResult, setExplainedTestResult] =
    useState<ExplainedTestResult>({
      run: false,
      passed: false,
      explanation: "",
    });
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedIdxStr: string = (event.target as HTMLInputElement).value;
    setSelectedIdx(+selectedIdxStr);

    // reset test result

    const tmpExplainedTestResult: ExplainedTestResult = {
      run: false,
      passed: false,
      explanation: "",
    };
    setExplainedTestResult(tmpExplainedTestResult);
  };

  const handleClick = () => {
    let passed: boolean = true;

    console.clear();
    console.log("Running all tests:");

    if (selectedIdx === exercieTest.getCorrectAnswerIdx()) {
      console.log("Answer is correct :)");
    } else {
      console.log("Answer is incorrect :(");
      passed = false;
    }

    const tmpExplainedTestResult: ExplainedTestResult = {
      run: true,
      passed: passed,
      explanation: exercieTest.getMcAnswerExplanationMd(selectedIdx!),
    };
    setExplainedTestResult(tmpExplainedTestResult);
  };

  return (
    <>
      <Box sx={{display: "flex", flexDirection: "row"}}>
        <Box mr={2}>
          <Box mb={2}>
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
          </Box>

          <Box mr={2}>
            <Button variant="contained" onClick={handleClick}
              size="small" disabled={selectedIdx === null}>
              Check your answer
            </Button>
          </Box>
        </Box>

        <Box sx={{flex: 1}}>
          <ExplainedTestResultView okMessage="Your answer is correct :)"
            errPrefix="Wrong answer :("
            explainedTestResult={explainedTestResult} />
        </Box>
      </Box>
    </>
  );
}
