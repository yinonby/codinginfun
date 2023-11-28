
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the first placeholder <<#1#>> with a member method declaration
such that the method is <<public>>, named <<printMenu>>, and has no
return-type (<<void>>);
- Replace the second placeholder <<#2#>> with a call to the
member method <<printMenu()>>.

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
