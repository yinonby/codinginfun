
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExerciseMap, { ExerciseItem } from "../exercises/ExerciseMap";
import ExerciseInfoAdapter, { EX_TYPE } from "../exercises/ExerciseInfoAdapter";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import { useParams } from 'react-router-dom';
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import Markdown from 'react-markdown'
import SolutionButton from "./SolutionButton";
import CodeEditor from "./CodeEditor";
import { Grid } from "@mui/material";

const exerciseMap = new ExerciseMap();

export default function ExerciseContent(props: any) {
    const { showSolutionButton } = props;
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
    const exercieTest: ExerciseTestAdapter | TextExerciseTestAdapter =
        exerciseItem.exerciseTest;
    const exerciseTitle: string = exerciseItem.exerciseInfo.getTitle();

    return (
        <Box>
            <Box mb={2} sx={{display: "flex", flexDirection: "row"}}>
                <Box sx={{flex: 1}}>
                    <h3>{exerciseTitle}</h3>
                </Box>
            </Box>

            {exercieInfo.getType() === EX_TYPE.EX_TYPE_TEXT &&
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6}>
                      <Instructions exercieInfo={exercieInfo} />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                      <TextTestSection exercieTest={exercieTest}
                          showSolutionButton={showSolutionButton}/>
                  </Grid>
              </Grid>
            }

            {exercieInfo.getType() === EX_TYPE.EX_TYPE_SANDBOX &&
                <>
                    <Box mb={2}>
                        <Instructions exercieInfo={exercieInfo} />
                    </Box>
                    <Box mb={2}>
                        <TestSection exercieTest={exercieTest}
                            showSolutionButton={showSolutionButton}/>
                    </Box>
                </>
            }
        </Box>
    );
}

function Instructions(props: any) {
    const exercieInfo: ExerciseInfoAdapter = props.exercieInfo;
    const mainInstruction: string = exercieInfo.getMainInstruction();
    const md = exercieInfo.getMdInstructions()
        .replaceAll("<<", "**`")
        .replaceAll(">>", "`**");

    return (
        <>
            <Box mb={1}>{mainInstruction}</Box>
            <Markdown>
                {md}
            </Markdown>
        </>
    );
}

type TestResult = {
    run: boolean,
    passed: boolean,
    errMessage: string,
}

function TextTestSection(props: any) {
    const { showSolutionButton } = props;
    const exercieTest: TextExerciseTestAdapter = props.exercieTest;
    const [solutionText, setSolutionText] = useState("");
    const [testResult, setTestResult] = useState({
        run: false,
        passed: false,
        errMessage: "",
    });

    const handleEditorChange = (value: string) => {
        setSolutionText(value);
    }

    const handleClick = () => {
        let passed: boolean = true;
        let errorMessage: string = "";

        console.clear();
        console.log("Running all tests:");

        try {
            console.log("Verifying your code...")
            exercieTest.verify(solutionText);
            console.log("Verifying your code... ok")
        } catch (e) {
            passed = false;
            console.log("Verifying your code... failed")
            if (e instanceof Error) {
                const err: Error = e;
                errorMessage = err.message;
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

    }
    const rowNum: number = exercieTest.getExpectedSolutionRowNum();
    const height: number = 19 * rowNum;

    return (
        <>
            <Box mb={2}>
                <Box mb={2} sx={{ height: height + "px",
                    borderRadius: "4px",
                    overflow: "hidden"
                }}>
                    <CodeEditor value={solutionText}
                        path="code.ts"
                        onChange={handleEditorChange}
                    />
                </Box>
            </Box>
            <Box mb={2} sx={{display: "flex", flexDirection: "row"}}>
                <Box mr={2}>
                    <Button variant="contained" onClick={handleClick}
                        size="small">
                        Run Tests
                    </Button>
                </Box>
                <Box sx={{flex: 1}}/>
                {showSolutionButton && <SolutionButton
                    currentSolutionText={solutionText}
                />}
            </Box>
            <TestResultView testResult={testResult} />
        </>
    );
}

function TestSection(props: any) {
    const { showSolutionButton } = props;
    const exercieTest: ExerciseTestAdapter = props.exercieTest;
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
            console.log("Verifying your code...")
            exercieTest.verify();
            console.log("Verifying your code... ok")
        } catch (e) {
            passed = false;
            console.log("Verifying your code... failed")
            if (e instanceof Error) {
                const err: Error = e;
                errorMessage = err.message;
            }
        }

        if (passed) {
            try {
                console.log("Running your code...")
                console.log("----- Output start -----")
                exercieTest.run();
                console.log("----- Output end -------")
                console.log("Running your code... ok")
            } catch (e) {
                console.log("----- Output end -------")
                console.log("Running your code... failed")
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

    }

    return (
        <>
            <Box mb={2} sx={{display: "flex", flexDirection: "row"}}>
                <Box mr={2}>
                    <Button variant="contained" onClick={handleClick}
                        size="small">
                        Run Tests
                    </Button>
                </Box>
                {showSolutionButton && <SolutionButton/>}
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
