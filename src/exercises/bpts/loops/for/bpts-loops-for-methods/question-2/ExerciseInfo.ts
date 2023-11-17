
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const fruitNames: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
>
> function doesFruitExist(fruitName: string): boolean {
>   for (let i: number = 0; i < fruitNames.length - 1; i++) {
>     if (fruitNames[i] === fruitName) {
>       return true;
>     }
>   }
>   return false;
> }
>
> console.log(doesFruitExist("Mango"));
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
