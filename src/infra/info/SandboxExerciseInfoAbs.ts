
import ExerciseInfoAbs from "./ExerciseInfoAbs";

export default abstract class SandboxExerciseInfoAbs extends ExerciseInfoAbs {
  abstract getSandboxId(): string;
}
