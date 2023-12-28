
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a non-constant variable named <<x>> of type <<number>>,
and initialized it with <<3>>.

- Your task is to replace the placeholder <<#1#>>: add <<4>> to <<x>>,
and assign the result back to <<x>> (use Addition-Assignment <<+=>> operator).
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
