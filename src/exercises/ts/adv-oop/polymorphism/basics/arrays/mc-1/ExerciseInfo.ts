
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Plant {}

class Flower extends Plant {}

class Tree {}

const plants: Plant[] = [];
plants.push(new Flower());
plants.push(new Tree());
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
