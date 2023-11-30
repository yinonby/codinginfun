
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Restaurant {
  public printMenu(): string {
    console.log("This restaurant offers a buffet!");
    return "This is a nice restaurant!";
  }
}

const restaurant: Restaurant = new Restaurant();
console.log(restaurant.printMenu());
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
