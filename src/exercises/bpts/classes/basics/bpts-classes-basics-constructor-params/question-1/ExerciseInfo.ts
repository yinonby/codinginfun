
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

> class Restaurant {
>   constructor(foodType: string) {
>     console.log(foodType);
>   }
> }
>
> const restaurants: Restaurant[] = [
>   new Restaurant("Italian"),
>   new Restaurant("Indian"),
>   new Restaurant("Thai"),
> ]
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
