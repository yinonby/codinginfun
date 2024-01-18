
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Plant {}

class Flower {}

function printPlantInfo(plant: Plant): void {
  if (plant instanceof Flower) {
    console.log("plant is a Flower!");
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
