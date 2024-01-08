
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
const x: number = 0;

if (x % 2 !== 0) {
  console.log("Odd number!");
} else {
  if (x > 0) {
    console.log("Positive even number!");
  } else {
    console.log("Non-positive even number!");
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
