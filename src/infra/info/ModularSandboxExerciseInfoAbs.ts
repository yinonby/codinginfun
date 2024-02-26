
import ExerciseInfoAbs from "./ExerciseInfoAbs";

export default abstract class ModularSandboxExerciseInfoAbs
  extends ExerciseInfoAbs {

  abstract getInitialFilePath(): string;
}
