
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
function printSomeName(x: number): void {
  const name: string = "Lisa";

  if (x >= 20) {
    const name: string = "Bob";
    console.log(name);
  } else {
    console.log(name);
  }
}

function printSomeFood(x: number): void {
  const food: string = "Pizza";

  if (x >= 0) {
    const food: string = "Salad";
    console.log(food);
  } else if (x < -4) {
    console.log(food);
  }
}

function printSomething(x: number): void {
  if (x > 10) {
    printSomeName(x);
  } else {
    printSomeFood(x);
  }
}

printSomething(20);
printSomething(-4);
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
