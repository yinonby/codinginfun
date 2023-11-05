
export default abstract class ExerciseInfoAbs {
    abstract getType(): EX_TYPE;
    abstract getDescription(): string;
    abstract getMdInstructions(): string;

    getTaskTypeStr(): string {
        if (this.getType() === EX_TYPE.EX_TYPE_SANDBOX) {
            return "Sandbox coding exercise";
        } else if (this.getType() === EX_TYPE.EX_TYPE_TEXT) {
            return "Coding exercise";
        } else {
            return "Coding exercise";
        }
    }
}

export enum EX_TYPE {
    EX_TYPE_TEXT,
    EX_TYPE_SANDBOX,
}