
export default interface QuestionExerciseTestAdapter {
    verify(solutionText: string | undefined): void;
    getExpectedSolutionText(): string;
    getExpectedSolutionRowNum(): number;
    getExpectedSolutionExplanation(): string;
}