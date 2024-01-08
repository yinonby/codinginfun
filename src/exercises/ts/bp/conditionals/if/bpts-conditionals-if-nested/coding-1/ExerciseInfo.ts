
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the placeholders <<#1#>> and <<#2#>> so that if the value of
<<isSunShining>> is <<true>>, <<"The sun is shining!">> is printed
to the output. Otherwise, if the value of <<isMoonUp>> is <<true>> then
<<"The moon is up!">> is printed to the output, and if it is
<<false>> then <<"There is darkness!">> is printed to the output.

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
