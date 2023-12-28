
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- The following code demonstrates code duplication.
- We can see that each variable is initialized with the arithmetic square of some number.
- Your goal is to finish the implementation of the function <<square>> and use it to initialize the variables.
- Replace the placeholder <<#1#>> with the arithmetic square of <<x>> (i.e. <<x * x>>).
- Use the function <<square>> to initialize the 3 variales.

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
