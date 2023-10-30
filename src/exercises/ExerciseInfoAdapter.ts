export default interface ExerciseInfoAdapter {
    getTitle(): string;
    getMainInstruction(): string;
    getInstructions(): string[];
}