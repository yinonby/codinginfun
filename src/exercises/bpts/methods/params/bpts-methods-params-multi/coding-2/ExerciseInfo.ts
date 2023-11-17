
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Write a method <<multiplyAndPrint>>.

- The method is given 3 parameters.

- The first parameter <<x>> is of type <<number>>.

- The second parameter <<y>> is of type <<number>>.

- The third parameter <<z>> is of type <<number>>.

- The method declares a new <<const>> variable <<result>> of type <<number>>,
and initializes it with the result of <<x * y * z>>.

- Then, the method prints <<result>> to the output (console).

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
