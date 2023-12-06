
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Shape {
  constructor(private shapeArea: number) {
  }

  // API

  public getMessage1(): string {
    return "I'm a shape!";
  }

  public getMessage2(): string {
    return this.getMessage1();
  }
}

class Square extends Shape {
  constructor(private squareSideLength: number) {
    super(squareSideLength * squareSideLength);
  }

  // API

  public getMessage1(): string {
    return "I'm a square!";
  }
}

const square: Square = new Square(4);
console.log(square.getMessage2());
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
