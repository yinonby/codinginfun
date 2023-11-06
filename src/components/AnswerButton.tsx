
import { useState } from "react";
import Box from '@mui/material/Box';
import { useParams, useSearchParams } from 'react-router-dom';
import ExerciseMap, { ExerciseItem } from "../exercises/ExerciseMap";
import DialogButton from "./DialogButton";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import DiffCodeEditor from './DiffCodeEditor';
import CodeEditor from './CodeEditor';
import { Button, Typography } from '@mui/material';
import ExerciseTask from "../exercises/ExerciseTask";
import QuestionExerciseTestAdapter from "../exercises/QuestionExerciseTestAdapter";

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
    const exercieTest: QuestionExerciseTestAdapter =
        exerciseTask.getTest() as QuestionExerciseTestAdapter;
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
                        {expectedSolutionText}
                    </Box>
                    <Box sx={{typography: "subtitle1", fontWeight: "bold"}}>
                        Explanation:
                    </Box>
                </>
            }
            {expectedSolutionExplanation}
        </DialogButton>
    );
}
