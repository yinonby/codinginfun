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
import { Routes, Route, useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { channel } from "diagnostics_channel";

const exerciseMap = new ExerciseMap();

export default function App(props: any) {
  const { courseName, chapterName,
    lessonName, exerciseName } = useParams();
  const { codesandbox } = props;

  return (
      <Box mx={2} className="app">
        {! codesandbox &&
          <>
            <h1 className="title">Hello Student</h1>
            <Box mb={2}>
              <SelectorArea/>
            </Box>
            {exerciseName && <CodeSandbox />}
          </>
        }
        { codesandbox && exerciseName && <ExerciseArea courseName={courseName!}
          chapterName={chapterName!} lessonName={lessonName!}
          exerciseName={exerciseName!}/>}
      </Box>
  );
}

function CodeSandbox() {
  const params = useParams();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const repo: string = "github/yinonby/codinginfun/tree/devel";
  const src: string = "https://codesandbox.io/embed/" + repo +
  "/?fontsize=14&hidenavigation=1&theme=dark" +
    "&initialpath=codesandbox%2F" + courseName + "%2F" + chapterName +
    "%2F" + lessonName + "%2F" + exerciseName +
    "&module=%2Fsrc%2Fexercises%2F" + courseName + "%2F" + chapterName +
    "%2F" + lessonName + "%2F" + exerciseName + "%2FExercise.ts";

  const style = {
    width: "100%",
    height: "500px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden",
  }

  const boxStyle = {
    height: "500px",
    borderRight: "1px solid black",
    borderRadius: "4px",
  }

  return (
    <Box style={boxStyle}>
      <iframe src={src}
        style={style}
        title="codinginfun"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </Box>
  );
}

function SelectorArea() {
  const params = useParams();
  const courseName: string = params.courseName || "";
  const chapterName: string = params.chapterName || "";
  const lessonName: string = params.lessonName || "";
  const exerciseName: string = params.exerciseName || "";
  const navigate = useNavigate();

  function handleChange(courseName: string, chapterName: string,
    lessonName: string, exerciseName: string) {
    if (exerciseName) {
      navigate("/exercises/" + courseName + "/" + chapterName + "/" +
        lessonName + "/" + exerciseName);
    } else if (lessonName) {
      navigate("/exercises/" + courseName + "/" + chapterName + "/" +
      lessonName);
    } else if (chapterName) {
      navigate("/exercises/" + courseName + "/" + chapterName);
    } else if (courseName) {
      navigate("/exercises/" + courseName);
    } else {
      navigate("/exercises/");
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flex: 1 }} mr={1}>
        <CourseSelector courseName={courseName}
          onChange={handleChange}/>
      </Box>
      <Box sx={{ flex: 1 }} mr={1}>
        <ChapterSelector courseName={courseName}
          chapterName={chapterName}
          onChange={handleChange}/>
      </Box>
      <Box sx={{ flex: 1 }} mr={1}>
        <LessonSelector courseName={courseName}
          chapterName={chapterName} lessonName={lessonName}
          onChange={handleChange}/>
      </Box>
      <Box sx={{ flex: 1 }}>
        <ExerciseSelector courseName={courseName}
          chapterName={chapterName} lessonName={lessonName}
          exerciseName={exerciseName}
          onChange={handleChange}/>
      </Box>
    </Box>
  );
}

function ExerciseArea(props: any) {
  const courseName: string = props.courseName;
  const chapterName: string = props.chapterName;
  const lessonName: string = props.lessonName;
  const exerciseName: string = props.exerciseName;

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
      <Box>
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
  const onChange: Function = props.onChange;
  const courseNames: SelectItem[] = exerciseMap.getCourses().map(e => ({
    name: e.name,
    displayName: e.displayName,
  }));

  const handleChange = (value: string) => {
    onChange(value, "", "", "");
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
  const onChange: Function = props.onChange;
  let chapterNames: SelectItem[] = [];

  if (courseName) {
    chapterNames = exerciseMap.getChapterNames(courseName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, value, "", "");
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
  const onChange: Function = props.onChange;
  let lessonNames: SelectItem[] = [];
  
  if (courseName && chapterName) {
    lessonNames =
      exerciseMap.getLessonNames(courseName, chapterName).map(e => ({
        name: e.name,
        displayName: e.displayName,
      }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, chapterName, value, "");
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
  const onChange: Function = props.onChange;
  let exerciseNames: SelectItem[] = [];

  if (courseName && chapterName && lessonName) {
    exerciseNames = exerciseMap.getExerciseNames(courseName, chapterName, lessonName).map(e => ({
      name: e.name,
      displayName: e.displayName,
    }));
  }

  const handleChange = (value: string) => {
    onChange(courseName, chapterName, lessonName, value);
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
