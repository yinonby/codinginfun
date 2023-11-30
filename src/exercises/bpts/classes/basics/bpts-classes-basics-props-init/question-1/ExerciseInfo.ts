
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Restaurant {
  public foodType: string;

  constructor(foodType: string) {
    this.foodType = foodType;
  }
}

const restaurant: Restaurant = new Restaurant("Italian");
console.log(restaurant.foodType);
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
