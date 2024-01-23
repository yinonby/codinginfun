
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the placeholder <<#1#>> with the appropriate interface,
so that the method <<playAudible()>> of class <<Spotify>> recieves a parameter
of interface type <<Audible>>.
- Replace the placeholder <<#1#>> with the appropriate expression,
so that the method <<playAudible()>> of class <<Spotify>> calls the method
<<play()>> of the <<audible>> parameter.

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
