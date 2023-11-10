
import { useState } from "react";
import Box from '@mui/material/Box';
import { useParams, useSearchParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../../exercises/ExerciseMap";
import DialogButton from "./DialogButton";
import RunnableCodingExerciseTestAbs from "../../infra/test/RunnableCodingExerciseTestAbs";
import CodingExerciseTestAbs from "../../infra/test/CodingExerciseTestAbs";
import DiffCodeEditor from './DiffCodeEditor';
import CodeEditor from './CodeEditor';
import { Button, Typography } from '@mui/material';
import ExerciseTask from "../../infra/task/ExerciseTask";
import QuestionExerciseTestAbs from "../../infra/test/QuestionExerciseTestAbs";
import Markdown from "./Markdown";

export default function AnswerButton(props: any) {
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { currentSolutionText } = props;
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";
    const taskIdStr: string = params.taskId || "";
    const [showComparison, setShowComparison] = useState(false);

    if (!exerciseName) {
        console.error("missing exerciseName");
        return <div>Missing exerciseName</div>;
    }
    if (!taskIdStr) {
        console.error("missing taskId");
        return <div>Missing taskId</div>;
    }
    const taskId: number = Number(taskIdStr);

    const exerciseMap = new ExerciseMap();
    const exerciseItem: ExerciseItem | null = exerciseMap.getExerciseItem(courseName, chapterName,
        lessonName, exerciseName);
    if (!exerciseItem) {
        return <Box mx={2} className="app">No exercise found</Box>;
    }

    const exerciseTask: ExerciseTask =
        exerciseItem.exerciseMgr.getTask(taskId);
    const exercieTest: QuestionExerciseTestAbs =
        exerciseTask.getTest() as QuestionExerciseTestAbs;
    const expectedSolutionText = exercieTest.getExpectedSolutionText();
    const expectedSolutionExplanation =
        exercieTest.getExpectedSolutionExplanation();
    const handleClick = () => {
        setShowComparison(! showComparison);
    }
    const handleClose = () => {
        setShowComparison(false);
    }

    return (
        <DialogButton dialogTitle="Answer"
            dialogProps={{maxWidth: "xl"}}
            buttonText="Show correct answer"
            onClose={handleClose}>
            {expectedSolutionText &&
                <>
                    <Box sx={{typography: "subtitle1", fontWeight: "bold"}}>
                        Correct answer:
                    </Box>
                    <Box mb={2}>
                        <Markdown md={expectedSolutionText}/>
                    </Box>
                    <Box sx={{typography: "subtitle1", fontWeight: "bold"}}>
                        Explanation:
                    </Box>
                </>
            }
            <Markdown md={expectedSolutionExplanation}/>
        </DialogButton>
    );
}
