import ExerciseTestAbs from "./ExerciseTestAbs";

export default abstract class CodingExerciseTestAbs
    extends ExerciseTestAbs {
    abstract verify(solutionText: string | undefined): void;
    abstract getInitialSolutionText(): string;
}