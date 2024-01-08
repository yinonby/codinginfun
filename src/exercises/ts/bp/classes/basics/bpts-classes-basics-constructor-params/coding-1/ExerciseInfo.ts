
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the first placeholder <<#1#>> with a constructor parameter
named <<foodType>> of type <<string>>.
- Replace the second placeholder <<#2#>> with the string <<"Italian">>,
so that a new instance of class <<Restaurant>> is created,
passing <<"Italian">> to the constructor.

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
