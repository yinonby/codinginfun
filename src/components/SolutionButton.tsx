
import { useState } from "react";
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { ExerciseItem } from "../exercises/ExerciseMap";
import DialogButton from "./DialogButton";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import { exerciseMap } from '../pages/ExercisePage';
import DiffCodeEditor from './DiffCodeEditor';
import CodeEditor from './CodeEditor';
import { Button } from '@mui/material';

export default function SolutionButton(props: any) {
    const params = useParams();
    const { currentSolutionText } = props;
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";
    const [showComparison, setShowComparison] = useState(false);

    if (!exerciseName) {
        console.error("missing exerciseName");
        return <div>Missing exerciseName</div>;
    }

    const exerciseItem: ExerciseItem | null = exerciseMap.getExerciseItem(courseName, chapterName,
        lessonName, exerciseName);
    if (!exerciseItem) {
        return <Box mx={2} className="app">No exercise found</Box>;
    }

    const exercieTest: ExerciseTestAdapter | TextExerciseTestAdapter = exerciseItem.exerciseTest;
    const expectedSolutionText = exercieTest.getExpectedSolutionText();
    const handleClick = () => {
        setShowComparison(! showComparison);
    }
    const handleClose = () => {
        setShowComparison(false);
    }

    return (
        <DialogButton dialogTitle="Solution"
            dialogProps={{maxWidth: "xl"}}
            buttonText="Show correct solution"
            onClose={handleClose}>
            <Box mb={2}>
                <Button variant="outlined" onClick={handleClick}
                    size="small">
                    {showComparison ? "Show correct solution only" :
                        "Compare this correct solution to my code"}
                </Button>
            </Box>
            <Box sx={{
                height: "300px",
                border: "1px solid black",
                borderRadius: "4px",
            }}>
                {! showComparison &&
                    <CodeEditor value={expectedSolutionText}
                        path="current-code.ts"
                        readOnly
                    />
                }
                {showComparison &&
                    <DiffCodeEditor original={expectedSolutionText}
                        modified={currentSolutionText}
                    />
                }
            </Box>
        </DialogButton>
    );
}
