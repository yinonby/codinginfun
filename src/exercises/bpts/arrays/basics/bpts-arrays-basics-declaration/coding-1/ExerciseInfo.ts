
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Declare a constant variable named <<someOddNumbers>>,
of type <<number[]>> (array of numbers), and initialize its value
to an array with the values <<1>>, <<3>>, and <<5>>.
- Then, in the next line, print the value of the size of the array
to the output (console).
- Then, in the next line, print the first element of the array
to the output (console).
- Then, in the next line, print the second element of the array
to the output (console).
- Then, in the next line, print the third element of the array
to the output (console).

Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
