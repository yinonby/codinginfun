
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";
import Header from "../components/Header";

export default function ExercisePage(props: any) {
  const { exerciseName } = useParams();
  const { codesandbox } = props;

  return (
    <>
      <Header/>
      <Box mx={2} className="app">
        {! codesandbox &&
          <>
            <h1 className="title">Students Exercises:</h1>
            <Box mb={2}>
              <ExerciseSelect/>
            </Box>
            {exerciseName && <CodeSandboxIFrame />}
          </>
        }
        { codesandbox && exerciseName && <Exercise />}
      </Box>
    </>
  );
}
