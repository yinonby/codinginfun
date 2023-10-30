
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExerciseMap, { ExerciseItem } from "../exercises/ExerciseMap";
import ExerciseInfoAdapter from "../exercises/ExerciseInfoAdapter";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import { useParams } from 'react-router-dom';

const exerciseMap = new ExerciseMap();

export default function ExerciseContent(props: any) {
    const params = useParams();
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";

    if (!exerciseName) {
        console.error("missing exerciseName");
        return <div>Missing exerciseName</div>;
    }

    const exerciseItem: ExerciseItem | null =
        exerciseMap.getExerciseItem(courseName, chapterName,
            lessonName, exerciseName);
    if (!exerciseItem) {
        return <Box mx={2} className="app">No exercise found</Box>;
    }

    const exercieInfo: ExerciseInfoAdapter = exerciseItem.exerciseInfo;
    const exercieTest: ExerciseTestAdapter = exerciseItem.exerciseTest;
    const exerciseTitle: string = exercieInfo.getTitle();

    return (
        <Box>
            <h3>{exerciseTitle}</h3>
            <Box mb={2}>
                <Instructions exercieInfo={exercieInfo} />
            </Box>
            <Box mb={2}>
                <TestSection exercieTest={exercieTest} />
            </Box>
        </Box>
    );
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
            <TestResultView testResult={testResult} />
        </>
    );
}

function TestResultView(props: any) {
    const testResult: TestResult = props.testResult;
    if (!testResult.run) {
        return null;
    } else if (testResult.passed) {
        return <OK />;
    } else {
        return <MyError errMessage={testResult.errMessage} />;
    }

}

function OK() {
    const style = {
        color: "green",
    }

    return (
        <div style={style}>
            <h4>Your code is correct!</h4>
        </div>
    );
}

function MyError(props: any) {
    const style = {
        color: "red",
    }

    return (
        <div style={style}>
            <h4>Error: {props.errMessage}</h4>
        </div>
    );
}
