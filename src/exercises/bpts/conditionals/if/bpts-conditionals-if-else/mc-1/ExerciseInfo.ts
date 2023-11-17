
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> function isOddNumber(x: number): boolean {
  if (x % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
 
console.log(isOddNumber(0));
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
