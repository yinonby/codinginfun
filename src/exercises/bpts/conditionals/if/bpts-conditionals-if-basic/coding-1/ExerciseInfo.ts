
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a variable <<isSunShining>> of type <<boolean>> and
initialized its value to <<true>>.

Tasks:
- Replace the placeholder <<#1#>> with the correct <<if>> condition,
using the variable <<isSunShining>>, so that <<"The sun is shining!">>
is printed to the output.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "Single method parameter";
  }

  getMdInstructions(): string {
    return md;
  }

}
