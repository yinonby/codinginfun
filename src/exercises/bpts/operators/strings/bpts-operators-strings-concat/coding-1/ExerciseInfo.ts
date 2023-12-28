
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a constant variable named <<firstName>> of type <<string>>,
and initialized it with <<"Marco">>.

- We declared another constant variable named <<lastName>> of type <<string>>,
and initialized it with <<"Polo">>.

- Your task is to replace the placeholder <<#1#>>: declare another
variable <<fullName>>, and initialize its value to <<"Marco Polo">>,
using the variables above.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
