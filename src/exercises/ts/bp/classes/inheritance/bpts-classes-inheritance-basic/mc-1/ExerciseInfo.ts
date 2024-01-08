
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Shape {
  public printShapeMessage(): void {
    console.log("This is a shape!");
  }
}

class Triangle {
  public printTriangleMessage(): void {
    console.log("This is a triangle!");
  }
}

const triangle: Triangle = new Triangle("Google");
triangle.printShapeMessage();
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
