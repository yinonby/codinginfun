
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const str1: string = "ABC";
> console.log(str1 + " ABC");
> console.log(str1 + "DEF" + str1);

Remember that each print to output (console) is printed on a separate line.
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
