
export default abstract class ExerciseInfoAbs {
  abstract getType(): EX_TYPE;
  abstract getMdInstructions(): string;

  public getTaskTypeStr(): string {
    if (this.getType() === EX_TYPE.EX_TYPE_SANDBOX ||
      this.getType() === EX_TYPE.EX_TYPE_MODULAR_SANDBOX) {
      return "Sandbox coding exercise";
    } else if (this.getType() === EX_TYPE.EX_TYPE_CODING_ADVANCED) {
      return "Advanced coding exercise";
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

  public isSandbox(): boolean {
    return this.getType() === EX_TYPE.EX_TYPE_SANDBOX ||
      this.getType() === EX_TYPE.EX_TYPE_MODULAR_SANDBOX;
  }
}

export enum EX_TYPE {
  EX_TYPE_CODING,
  EX_TYPE_SANDBOX,
  EX_TYPE_MODULAR_SANDBOX,
  EX_TYPE_CODING_ADVANCED,
  EX_TYPE_QUESTION,
  EX_TYPE_MULTICHOICE,
}