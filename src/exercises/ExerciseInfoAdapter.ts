export default interface ExerciseInfoAdapter {
    getType(): EX_TYPE;
    getTitle(): string;
    getMainInstruction(): string;
    getMdInstructions(): string;
}

export enum EX_TYPE {
    EX_TYPE_TEXT,
    EX_TYPE_SANDBOX,
}