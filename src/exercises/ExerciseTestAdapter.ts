export default interface ExerciseTestAdapter {
    verify(): void;
    run(): void;
    getExpectedSolutionText(): string;
}