
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> function choosePastry(sweetness: string, size: string): string {
>   if (sweetness === "strong") {
>     if (size === "small") {
>       return "Cupcake";
>     } else {
>       return "Chocolate cake";
>     }
>   } else {
>     if (size === "small") {
>       return "Croissant";
>     } else {
>       return "Lemon cake";
>     }
>   }
> }
>
> console.log(choosePastry("light", "small"));
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
