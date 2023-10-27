import * as React from "react";
import { useState }  from "react";
import "./styles.css";
import Test from "./exercises/bpts/vars-basic-1/Test";
import ExerciseInfo from "./exercises/bpts/vars-basic-1/ExerciseInfo";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function App() {
  

  return (
    <div className="app">
      <h1 className="title">Hello Student</h1>
      <Box mb={2}>
        <Instructions/>
      </Box>
      <Box mb={2}>
        <TestSection/>
      </Box>
    </div>
  );
}

function Instructions() {
  const exercieInfo = new ExerciseInfo();

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

function TestSection() {
  const [testResult, setTestResult] = useState({
    run: false,
    passed: false,
    errMessage: "",
  });

  const handleClick = () => {
    const test: Test = new Test();
    let passed: boolean = true;
    let errorMessage: string = "";
  
    try {
      test.run();
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
    console.log(tmpTestResult);

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
    console.log(testResult);
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
