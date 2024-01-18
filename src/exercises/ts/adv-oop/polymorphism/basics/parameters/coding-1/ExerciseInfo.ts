
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Tasks:
- Replace the placeholder <<#1#>> with the appropriate class name,
so that the function <<printPlantInfo()>> accepts a parameter of type
<<Plant>>.
- Replace the placeholder <<#2#>> with the appropriate expression,
so that <<"plant is a Flower!">> is printed to the output.
- Replace the placeholder <<#3#>> with the appropriate expression,
so that <<"plant is not a Flower!">> is printed to the output.

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
