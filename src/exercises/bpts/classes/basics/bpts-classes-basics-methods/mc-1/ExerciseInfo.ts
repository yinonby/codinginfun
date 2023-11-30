
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Restaurant {
  public printMenu(): void {
    console.log("This restaurant offers a buffet!");
  }
}

const restaurant: Restaurant = new Restaurant();
const menu: string = restaurant.printMenu();
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
