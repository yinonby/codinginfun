
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";
import Header, { Content } from "../components/Header";
import ExerciseMap, { ExerciseItem } from "../exercises/ExerciseMap";
import ExerciseInfoAdapter, { EX_TYPE } from "../exercises/ExerciseInfoAdapter";
import ExerciseTestAdapter from "../exercises/ExerciseTestAdapter";
import TextExerciseTestAdapter from "../exercises/TextExerciseTestAdapter";
import ExerciseContent from '../components/ExerciseContent';

const exerciseMap = new ExerciseMap();

export default function ExercisePage(props: any) {
    const params = useParams();
    const courseName: string = params.courseName || "";
    const chapterName: string = params.chapterName || "";
    const lessonName: string = params.lessonName || "";
    const exerciseName: string = params.exerciseName || "";

    const { codesandbox } = props;
    const containerStyle = {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    }
    const codesandboxContainerStyle = {
        borderRight: "1px solid black",
        borderRadius: "4px",
        flex: 1,
    }

    if (! exerciseName) {
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

    return (
        <>
            <Header />
            <Content>
                <Box mx={2} sx={{height: "100%"}}>
                    {!codesandbox &&
                        <Box sx={containerStyle}>
                            <h1>Students Exercises:</h1>
                            <Box mb={2}>
                                <ExerciseSelect />
                            </Box>
                            {exercieInfo.getType() === EX_TYPE.EX_TYPE_TEXT &&
                                <ExerciseContent />
                            }
                            {exercieInfo.getType() !== EX_TYPE.EX_TYPE_TEXT && exerciseName &&
                                <Box sx={codesandboxContainerStyle} mb={2}>
                                    <CodeSandboxIFrame />
                                </Box>
                            }
                        </Box>
                    }
                    {codesandbox && exerciseName && <Exercise />}
                </Box>
            </Content>
        </>
    );
}
