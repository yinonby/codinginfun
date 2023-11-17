
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> const availableMilkshakes: string[] = ["Chocolate", "Vanilla",
>   "Strawberry-Chocolate"];
>
> function getMilkshake(firstChoice: string, secondChoice: string): string {
>   if (availableMilkshakes.includes(firstChoice)) {
>     return firstChoice;
>   } else if (availableMilkshakes.includes(secondChoice)) {
>     return secondChoice;
>   } else {
>     return availableMilkshakes[0];
>   }
> }
>
> console.log(getMilkshake("chocolate", "Vanilla"));
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
