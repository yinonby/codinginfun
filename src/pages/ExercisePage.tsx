
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";
import Header, { Content } from "../components/Header";

export default function ExercisePage(props: any) {
    const { exerciseName } = useParams();
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
                            {exerciseName &&
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
