import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Your declaration should come in the line below 'line 1'.

- Declare a constant variable named <<x>>, of type <<number>>, and initialize its value to <<10>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_SANDBOX;
  }

  getMdInstructions(): string {
    return md;
  }

}
