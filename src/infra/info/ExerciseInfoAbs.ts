
export default abstract class ExerciseInfoAbs {
  abstract getType(): EX_TYPE;
  abstract getDescription(): string;
  abstract getMdInstructions(): string;

  getTaskTypeStr(): string {
    if (this.getType() === EX_TYPE.EX_TYPE_SANDBOX) {
      return "Sandbox coding exercise";
    } else if (this.getType() === EX_TYPE.EX_TYPE_CODING) {
      return "Coding exercise";
    } else if (this.getType() === EX_TYPE.EX_TYPE_QUESTION) {
      return "Coding question";
    } else if (this.getType() === EX_TYPE.EX_TYPE_MULTICHOICE) {
      return "Multiple choice question";
    } else {
      throw new Error("Unsupported type");
    }
  }
}

export enum EX_TYPE {
  EX_TYPE_CODING,
  EX_TYPE_SANDBOX,
  EX_TYPE_QUESTION,
  EX_TYPE_MULTICHOICE,
}