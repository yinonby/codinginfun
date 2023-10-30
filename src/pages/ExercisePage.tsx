
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";
import Header from "../components/Header";

export default function ExercisePage(props: any) {
    const { exerciseName } = useParams();
    const { codesandbox } = props;
    const containerStyle = {
        height: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        marginBottom: 4,
    }
    const codesandboxContainerStyle = {
        borderRight: "1px solid black",
        borderRadius: "4px",
        flex: 1,
    }

    return (
        <>
            <Header />
            <Box mx={2}>
                {!codesandbox &&
                    <Box sx={containerStyle}>
                        <h1>Students Exercises:</h1>
                        <Box mb={2}>
                            <ExerciseSelect />
                        </Box>
                        {exerciseName &&
                            <Box sx={codesandboxContainerStyle}>
                                <CodeSandboxIFrame />
                            </Box>
                        }
                    </Box>
                }
                {codesandbox && exerciseName && <Exercise />}
            </Box>
        </>
    );
}
