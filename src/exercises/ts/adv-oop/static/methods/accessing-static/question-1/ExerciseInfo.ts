
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
class Furniture {
  private static material: string = "Wood";

  protected static getMaterial(): string {
    return this.material;
  }

  protected static setMaterial(material: string): void {
    return this.material = material;
  }
}

console.log(Furniture.getMaterial());
Furniture.setMaterial("Iron");
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
