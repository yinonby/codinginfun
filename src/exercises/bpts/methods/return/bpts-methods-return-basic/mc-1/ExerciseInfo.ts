
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

> function alwaysTrue(): void {
  console.log("Inside foo()");
  return true;
}
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getDescription(): string {
    return "'For' loops";
  }

  getMdInstructions(): string {
    return md;
  }

}
