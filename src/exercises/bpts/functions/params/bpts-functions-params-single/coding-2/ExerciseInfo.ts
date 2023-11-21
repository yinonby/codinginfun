
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Write a function <<printName>>.

- The function is given a parameter <<firstName>> of type <<number>>.

- The function prints to the output (console) the value of <<firstName>>,
preceded by <<"First name is ">>.

- Remember that in order to concatenate strings, we use the plus sign <<+>>.

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
