
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Shape {
  constructor(private shapeArea: number) {
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  public getMessage(): string {
    return "I am a square!";
  }

  public printMessage(): void {
    console.log(super.getMessage());
  }
}
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
