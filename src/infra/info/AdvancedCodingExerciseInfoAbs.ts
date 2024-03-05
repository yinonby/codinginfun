
import ExerciseInfoAbs from "./ExerciseInfoAbs";

// irrelevant for advanced coding exercise
const mdInstructions: string = `
`;

export default abstract class AdvancedCodingExerciseInfoAbs
  extends ExerciseInfoAbs {

  public abstract getInitialFilePath(): string;

  public abstract getFullCodesandboxInstructionsMd(): string;

  getMdInstructions(): string {
    return mdInstructions.replace(/^\s+|\s+$/g, '');;
  }
}
