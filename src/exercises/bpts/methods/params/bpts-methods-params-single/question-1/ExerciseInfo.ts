
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> function printSquare(x: number) {
>   console.log(x * x);
> }
>
> printSquare(2);
> printSquare(5);

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getDescription(): string {
    return "Simple method declaration";
  }

  getMdInstructions(): string {
    return md;
  }

}
