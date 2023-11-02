
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { ExerciseItem } from "../exercises/ExerciseMap";
import SolutionDialog from "./SolutionDialog";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import { exerciseMap } from '../pages/ExercisePage';

export default function SolutionButton(props: any) {
    const params = useParams();
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";

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

    return (
        <SolutionDialog dialogContent={expectedSolutionText} />
    );
}
