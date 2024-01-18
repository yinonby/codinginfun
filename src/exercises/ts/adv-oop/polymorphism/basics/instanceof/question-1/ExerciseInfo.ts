
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
class Plant {}

class Flower extends Plant {}

class Tree extends Plant {}

let plant: Plant = new Flower();
if (plant instanceof Tree) {
  console.log("plant is a Tree!");
}

plant = new Tree();
if (plant instanceof Tree) {
  console.log("plant is a Tree!");
}
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
