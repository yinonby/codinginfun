import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RunnableCodingExerciseTestAbs from "../../infra/test/RunnableCodingExerciseTestAbs";
import SolutionButton from "./SolutionButton";
import { TestResult } from "./TestResultView";
import TestResultView from './TestResultView';

export function CodesandboxTaskView(props: any) {
    const { showSolutionButton } = props;
    const exercieTest: RunnableCodingExerciseTestAbs = props.exercieTest;
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
            console.log("Verifying your code...");
            exercieTest.verify();
            console.log("Verifying your code... ok");
        } catch (e) {
            passed = false;
            console.log("Verifying your code... failed");
            if (e instanceof Error) {
                const err: Error = e;
                errorMessage = err.message;
            }
        }

        if (passed) {
            try {
                console.log("Running your code...");
                console.log("----- Output start -----");
                exercieTest.run();
                console.log("----- Output end -------");
                console.log("Running your code... ok");
            } catch (e) {
                console.log("----- Output end -------");
                console.log("Running your code... failed");
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

    };

    return (
        <>
            <Box mb={2} sx={{ display: "flex", flexDirection: "row" }}>
                <Box mr={2}>
                    <Button variant="contained" onClick={handleClick}
                        size="small">
                        Run Tests
                    </Button>
                </Box>
                {showSolutionButton && <SolutionButton />}
            </Box>
            <TestResultView okMessage="Your code is correct!"
                errPrefix="Error"
                testResult={testResult} />
        </>
    );
}
