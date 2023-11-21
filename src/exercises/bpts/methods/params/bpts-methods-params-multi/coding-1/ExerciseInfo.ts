
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Write a function <<printFullName>>.

- The function is given 2 parameters.

- The first parameter <<firstName>> is of type <<string>>.

- The second parameter <<lastName>> is of type <<string>>.

- The function prints the full name to the output (console), where the first
name and the last name are separated by a space (<<" ">>).

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
