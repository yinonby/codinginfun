
import "./styles.css";
import Box from '@mui/material/Box';
import ExerciseMap from "../exercises/ExerciseMap";
import { useParams } from 'react-router-dom';
import CodeSandboxIFrame from "../components/CodeSandboxIFrame";
import ExerciseSelect from "../components/ExerciseSelect";
import Exercise from "../components/ExerciseContent";

export default function ExerciseC(props: any) {
  const { exerciseName } = useParams();
  const { codesandbox } = props;

  return (
      <Box mx={2} className="app">
        {! codesandbox &&
          <>
            <h1 className="title">Hello Student</h1>
            <Box mb={2}>
              <ExerciseSelect/>
            </Box>
            {exerciseName && <CodeSandboxIFrame />}
          </>
        }
        { codesandbox && exerciseName && <Exercise />}
      </Box>
  );
}
