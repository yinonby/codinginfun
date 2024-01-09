
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
class Furniture {
  public static getMaterial(): string {
    return "Wood";
  }
}

console.log(Furniture.getMaterial());
<<<<

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
