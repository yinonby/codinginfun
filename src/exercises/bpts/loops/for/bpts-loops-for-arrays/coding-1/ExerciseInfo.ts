
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared an array of fruits with 4 elements, followed by a <<for>> loop.
- Your task is to replace the first question mark <<?>> so that we
can iterate over all the elements of the array.
- Then, replace the second question mark <<?>> with the i-th element
of the array (so that the relevant fruit is printed to the output).
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "'For' loops";
  }

  getMdInstructions(): string {
    return md;
  }

}
