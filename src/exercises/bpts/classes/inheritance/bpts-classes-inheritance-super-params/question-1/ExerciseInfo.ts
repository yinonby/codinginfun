
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Company {
  constructor(private companyName: string) {
  }

  public getCompanyName(): string {
    return this.companyName;
  }
}

class Restaurant extends Company {
  constructor(companyName: string, private foodType: string) {
    super(companyName);
  }

  printSummary(): void {
    console.log(this.getCompanyName(), this.foodType);
  }
}

const restaurant: Restaurant = new Restaurant("Pizza Pino", "Italian");
restaurant.printSummary();
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
