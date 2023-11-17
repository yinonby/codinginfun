
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> function printSomeNumbers(x: number): void {
>   if (x > 10) {
>     const x: number = 20;
>     console.log(x);
>   } else if (x % 3 === 1) {
>     const x: number = 30;
>     console.log(x);
>   } else {
>     const x: number = 40;
>     console.log(x);
>   }
> }
>
> printSomeNumbers(10);
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
