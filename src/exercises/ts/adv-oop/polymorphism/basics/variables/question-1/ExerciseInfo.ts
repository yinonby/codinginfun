
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

>>>>
class Plant {
  public printSummary(): void {
    console.log("I'm a plant!");
  }
}

class Tree extends Plant {
  public printSummary(): void {
    console.log("I'm a tree!");
  }
}

const plant: Plant = new Tree();

plant.printSummary();
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
