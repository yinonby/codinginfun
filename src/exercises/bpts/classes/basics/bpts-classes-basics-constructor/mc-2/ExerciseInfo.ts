
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

> class Restaurant {
>   constructor() {
>     console.log("A new restaurant has been created!");
>   }
> }
>
> new Restaurant();
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
