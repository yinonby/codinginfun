
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Shape {
  constructor() {
    console.log("A new shape has been created!");
  }
}

class Square extends Shape {
  constructor() {
    console.log("A new square has been created!");
    super();
  }
}

const square: Square = new Square();
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
