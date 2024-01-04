
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- In this exercise, we declared a non-constant variable named <<x>>
of type <<number>>, and initialized it with <<7>>.

- Then we declared another non-constant variable named <<y>> of type <<number>>,
and left a placeholder <<#1#>> instead of initializing it.

- Your task is to initialize <<y>> with the value of <<x>>, while
incrementing <<x>> at the same time.

- Note that we declared the variables non-constant because increment/decrement
operations are changing the value of the variables.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
