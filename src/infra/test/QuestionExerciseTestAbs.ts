import ExerciseTestAbs from "./ExerciseTestAbs";

export default abstract class QuestionExerciseTestAbs extends ExerciseTestAbs {
  abstract verify(solutionText: string | undefined): void;
  abstract getExpectedExplanationMd(): string;
}