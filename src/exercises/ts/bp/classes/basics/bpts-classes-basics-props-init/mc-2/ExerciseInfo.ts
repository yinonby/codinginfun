
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Restaurant {
  public foodType: string;
  public address: string;

  constructor(foodType: string) {
    this.foodType = foodType;
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian");
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
