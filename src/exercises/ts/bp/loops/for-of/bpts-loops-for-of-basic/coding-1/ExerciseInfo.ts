
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared an array of fruits with 4 elements, followed by a loop.
- Your task is to replace the first placeholder <<#1#>> with the
correct keyword so that a <<for...of>> loop is used in order to iterate
over the array items.
- Then, replace the second placeholder <<#2#>> with the current item
of the array (so that all fruits are printed to the output).
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
