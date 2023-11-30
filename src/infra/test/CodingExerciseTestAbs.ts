import ExerciseTestAbs from "./ExerciseTestAbs";

export default abstract class CodingExerciseTestAbs
  extends ExerciseTestAbs {
  abstract getInitialSolutionText(): string;
  abstract getExpectedExplanationMd(): string;

  verify(solutionText: string | undefined) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error("Incorrect solution");
    }
  }
}