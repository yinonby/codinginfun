import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExerciseMap, {ExerciseItem} from "./ExerciseMap";
import ExerciseInfoAdapter from "./ExerciseInfoAdapter";
import ExerciseTestAdapter from "./ExerciseTestAdapter";
import {useLocation, useSearchParams} from "react-router-dom";

const exerciseMap = new ExerciseMap();

export default function App() {
  const search = useLocation().search;
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchParams = new URLSearchParams(search);
  const courseName: string | null = urlSearchParams.get("courseName");
  const exerciseName: string | null = urlSearchParams.get("exerciseName");
  let fileName: string | null = urlSearchParams.get("file");

  useEffect(() => {
    if (fileName === null) {
      fileName = "/src/exercises/" + courseName + "/" + exerciseName + "/Exercise.ts";
      searchParams.set("file", fileName);
      setSearchParams(searchParams);
    }
  });
  
  if (! courseName || ! exerciseName) {
    return <></>;
  }

  if (fileName === null) {
    return null;
  }

  const exerciseItem: ExerciseItem = exerciseMap.getExerciseItem(courseName !, exerciseName !);
  const exercieInfo: ExerciseInfoAdapter = exerciseItem.exerciseInfo;
  const exercieTest: ExerciseTestAdapter = exerciseItem.exerciseTest;

  return (
      <div className="app">
        <h1 className="title">Hello Student</h1>
        <Box mb={2}>
          <Instructions exercieInfo={exercieInfo}/>
        </Box>
        <Box mb={2}>
          <TestSection exercieTest={exercieTest}/>
        </Box>
      </div>
  );
}

function Instructions(props: any) {
  const exercieInfo: ExerciseInfoAdapter = props.exercieInfo;

  return (
    <>
      {exercieInfo.getInstructions().map((e, idx) => <div key={idx}>{e}</div>)}
    </>
  );
}

type TestResult = {
  run: boolean,
  passed: boolean,
  errMessage: string,
}

function TestSection(props: any) {
  const exercieTest: ExerciseTestAdapter = props.exercieTest;
  const [testResult, setTestResult] = useState({
    run: false,
    passed: false,
    errMessage: "",
  });

  const handleClick = () => {
    let passed: boolean = true;
    let errorMessage: string = "";
  
    try {
      exercieTest.run();
    } catch (e) {
      passed = false;
      if (e instanceof Error) {
        const err: Error = e;
        errorMessage = err.message;
      }
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

  }

  return (
    <>
      <Box mb={2}>
        <Button variant="contained" onClick={handleClick}>Run Tests</Button>
      </Box>
      <TestResultView testResult={testResult}/>
    </>
  );
}

function TestResultView(props: any) {
  const testResult: TestResult = props.testResult;
    if (! testResult.run) {
    return null;
  } else if (testResult.passed) {
    return <OK />;
  } else {
    return <MyError errMessage={testResult.errMessage} />;
  }

}

function OK() {
  return (
    <div className="tests-ok">
      <h2>Your code is correct!</h2>
    </div>
  );
}

function MyError(props: any) {
  return (
    <div className="tests-fail">
      <h2>Error: {props.errMessage}</h2>
    </div>
  );
}
