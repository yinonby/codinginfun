
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the placeholder <<#1#>> with the correct keyword,
so that <<"The sun is shining!">> is printed to the output.

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
