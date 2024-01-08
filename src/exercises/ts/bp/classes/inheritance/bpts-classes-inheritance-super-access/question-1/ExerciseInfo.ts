
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Shape {
  constructor(private shapeArea: number) {
  }

  public getMessage(): string {
    return "I am a shape!";
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

const square: Square = new Square(4);
square.printMessage();
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
