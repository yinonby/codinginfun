import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExerciseMap, {ExerciseItem} from "./ExerciseMap";
import ExerciseInfoAdapter from "./ExerciseInfoAdapter";
import ExerciseTestAdapter from "./ExerciseTestAdapter";
import {useLocation, useSearchParams} from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const exerciseMap = new ExerciseMap();

export default function App() {
  const search = useLocation().search;
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchParams = new URLSearchParams(search);
  const actualFileName: string | null = urlSearchParams.get("file");
  const exerciseName: string | null = urlSearchParams.get("ex");

  if (actualFileName === null) {
    return <Box mx={2} className="app">No file name query param</Box>;
  }

  if (exerciseName === null) {
    return <Box mx={2} className="app">No exercise name query param</Box>;
  }

  /*
  const actualFileNameParts: string[] = actualFileName.split("/");
  const courseName: string = actualFileNameParts[3];
  const exerciseName: string = actualFileNameParts[4];*/
  const exerciseNameParts: string[] = exerciseName.split("-");
  const courseName: string = exerciseNameParts[0];
  const chapterName = exerciseNameParts[1];
  const lessonName = exerciseNameParts[2];

  const exerciseItem: ExerciseItem | null =
    exerciseMap.getExerciseItem(courseName,chapterName,
      lessonName, exerciseName);
  if (! exerciseItem) {
    return <Box mx={2} className="app">No exercise found</Box>;
  }

  const exercieInfo: ExerciseInfoAdapter = exerciseItem.exerciseInfo;
  const exercieTest: ExerciseTestAdapter = exerciseItem.exerciseTest;
  const exerciseTitle: string = exercieInfo.getTitle();

  return (
      <Box mx={2} className="app">
        <h1 className="title">Hello Student</h1>
        <Box mb={2}>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ flex: 1 }} mr={1}>
              <CourseSelector courseName={courseName}/>
            </Box>
            <Box sx={{ flex: 1 }} mr={1}>
              <ChapterSelector courseName={courseName}
                chapterName={chapterName}/>
            </Box>
            <Box sx={{ flex: 1 }} mr={1}>
              <LessonSelector courseName={courseName}
                chapterName={chapterName} lessonName={lessonName}/>
            </Box>
            <Box sx={{ flex: 1 }}>
              <ExerciseSelector courseName={courseName}
                chapterName={chapterName} lessonName={lessonName}
                exerciseName={exerciseName}/>
            </Box>
          </Box>
        </Box>
        <h3>{exerciseTitle}</h3>
        <Box mb={2}>
          <Instructions exercieInfo={exercieInfo}/>
        </Box>
        <Box mb={2}>
          <TestSection exercieTest={exercieTest}/>
        </Box>
      </Box>
  );
}

type SelectItem = {
  name: string,
  displayName: string,
}

function BasicSelector(props: any) {
  const selectItems: SelectItem[] = props.selectItems;
  const curValue: string = props.curValue;
  const label: string = props.label;
  const onChange: Function = props.onChange;

  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="course-name-select-label">{label}</InputLabel>
      <Select
        labelId="course-name-select-label"
        id="course-name-select"
        value={curValue}
        label={label}
        onChange={handleChange}
      >
        {selectItems.map(e =>
          <MenuItem key={e.name} value={e.name}>{e.displayName}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

function CourseSelector(props: any) {
  const courseName = props.courseName;
  const courseNames: SelectItem[] = exerciseMap.getCourses().map(e => ({
    name: e.name,
    displayName: e.displayName,
  }));

  const handleChange = (value: string) => {
    //setCourseName(value);
  };

  return <BasicSelector
    selectItems={courseNames}
    label="Course"
    onChange={handleChange}
    curValue={courseName}/>;
}

function ChapterSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const chapterNames: SelectItem[] =
    exerciseMap.getChapterNames(courseName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));

  const handleChange = (value: string) => {
    //setChapterName(value);
  };

  return <BasicSelector
    selectItems={chapterNames}
    label="Chapter"
    onChange={handleChange}
    curValue={chapterName}/>;
}

function LessonSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const lessonName: string = props.lessonName;
  const lessonNames: SelectItem[] =
    exerciseMap.getLessonNames(courseName, chapterName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));

  const handleChange = (value: string) => {
    //setLessonName(value);
  };

  return <BasicSelector
    selectItems={lessonNames}
    label="Lesson"
    onChange={handleChange}
    curValue={lessonName}/>;
}

function ExerciseSelector(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const lessonName: string = props.lessonName;
  const exerciseName: string = props.exerciseName;
  const exerciseNames: SelectItem[] =
    exerciseMap.getExerciseNames(courseName, chapterName, lessonName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));

  const handleChange = (value: string) => {
    //setExerciseName(value);
  };

  return <BasicSelector
    selectItems={exerciseNames}
    label="Exercise"
    onChange={handleChange}
    curValue={exerciseName}/>;
}

function Instructions(props: any) {
  const exercieInfo: ExerciseInfoAdapter = props.exercieInfo;
  const mainInstruction: string = exercieInfo.getMainInstruction();
  const instructions: string[] = exercieInfo.getInstructions();

  return (
    <>
      <Box mb={1}>{mainInstruction}</Box>
      {instructions.map((e, idx) =>
        <li key={idx}>
          {e}
        </li>)
      }
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
      <h4>Your code is correct!</h4>
    </div>
  );
}

function MyError(props: any) {
  return (
    <div className="tests-fail">
      <h4>Error: {props.errMessage}</h4>
    </div>
  );
}
