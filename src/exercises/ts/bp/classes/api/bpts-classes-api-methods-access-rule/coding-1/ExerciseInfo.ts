
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the placeholders <<#1#>>, <<#2#>>, <<#3#>>, and <<#4#>> with
the correct accessibility modifier so that getter/setter methods and API
methods are accessible outside the class, and internal methods aren't.

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
