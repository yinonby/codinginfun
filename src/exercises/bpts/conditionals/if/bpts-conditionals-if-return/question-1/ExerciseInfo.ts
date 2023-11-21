
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> function isChristmas(monthName: string, dayOfMonth: number): boolean {
>   if (monthName === "December" && dayOfMonth === 25) {
>     return true;
>   }
>   return false;
> }
> 
> function isNewYearsDay(monthName: string, dayOfMonth: number): boolean {
>   if (monthName === "January" && dayOfMonth === 1) {
>     return true;
>   }
>   return false;
> }
> 
> console.log(isChristmas("December", 24));
> console.log(isNewYearsDay("January", 1));

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getDescription(): string {
    return "Simple function declaration";
  }

  getMdInstructions(): string {
    return md;
  }

}
