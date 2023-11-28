
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the first placeholder <<#1#>> with an expression so that
the member method <<getFoodType()>> returns the value of
the member property <<foodType>>.
- Replace the second placeholder <<#2#>> with a call to the
<<public>> member method <<getFoodType()>>, so that the
result is printed to the output.

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
