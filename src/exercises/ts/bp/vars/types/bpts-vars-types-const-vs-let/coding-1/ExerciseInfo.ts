
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Declare a constant variable named <<piValue>>, of type number,
and initialize its value to <<3.14>>.
- Then, in the next line, print the value of <<piValue>>
to the output (console).
- Then, in the next line, declare a non-constant variable named <<myAge>>,
of type <<number>>, and initialize its value to <<35>>.
- Then, in the next line, print the value of <<myAge>>
to the output (console).
- Then, in the next line, change the value of <<myAge>> to <<36>>.
- Then, in the next line, print the value of <<myAge>>
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
