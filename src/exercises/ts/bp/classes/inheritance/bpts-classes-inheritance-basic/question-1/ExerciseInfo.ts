
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Shape {
  public printShapeMessage(): void {
    console.log("This is a shape!");
  }
}

class Triangle extends Shape {
  public printTriangleMessage(): void {
    console.log("This is a triangle!");
  }
}

const triangle: Triangle = new Triangle("Google");
triangle.printTriangleMessage();
triangle.printShapeMessage();
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
