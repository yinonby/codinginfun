
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Each variable of type array has a built-in <<includes()>> method.

When calling this method with some value,
<<true>> is returned if and only if the array
contains an element whose value is equal to the parameter passed to
the <<includes()>> method.

For example:
> const brightEyeColors: string[] = ["Green", "Blue"];
console.log(brightEyeColors.includes("Green")); // output: true
console.log(brightEyeColors.includes("Brown")); // output: false

Is the following code valid?

> function isPersonEyesBright(personEyesColor: string): boolean {
  const brightEyeColors: string[] = ["Green", "Blue"];
  if (brightEyeColors.includes(personEyesColor)) {
    return true;
  }
}
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getDescription(): string {
    return "'For' loops";
  }

  getMdInstructions(): string {
    return md;
  }

}
