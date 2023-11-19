
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

> const fruits: string[] = ["Apple", "Apple", "Apple"];
> for (const fruit of fruits) {
>   console.log(fruit);
> }
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
