
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
function printSomeMath(x: number, y: number): void {
  if (x + y > 10) {
    console.log("option 1");
  } else if (x + y < 3) {
    console.log("option 2");
  } else if (x + y > 7) {
    console.log("option 3");
  } else {
    console.log("option 4");
  }
}

printSomeMath(8, 0);
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
