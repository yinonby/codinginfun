
export default interface TextExerciseTestAdapter {
    verify(solutionText: string | undefined): void;
    getInitialSolutionText(): string;
    getExpectedSolutionText(): string;
    getExpectedSolutionRowNum(): number;
}