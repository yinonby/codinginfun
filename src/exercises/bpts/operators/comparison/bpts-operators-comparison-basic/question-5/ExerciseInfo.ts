
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const str1: string = "aaa";
const str2: string = "Aaa";
console.log(str1 < str2);
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getDescription(): string {
    return "Assignment operators";
  }

  getMdInstructions(): string {
    return md;
  }

}
