
export default interface TextExerciseTestAdapter {
    verify(solutionText: string | undefined): void;
}