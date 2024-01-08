
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the first placeholder <<#1#>> with the correct keyword, so
that when an instance of class <<Restaurant>> is created, the message
<<"A new restaurant has been created!">> is printed to the output.
- Replace the second placeholder <<#2#>> with the correct class name, so
that a new instance of class <<Restaurant>> is created.

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
