
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Company {
  private employeeNames: string[] = [];

  public addEmployee(employeeName: string): void {
    this.employeeNames.push(employeeName);
  }

  // for internal use
  protected getEmployeeNamesAsString(): string {
    return this.employeeNames.join(", ");
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }
}

const restaurant: Restaurant = new Restaurant("Pizza Pino");
console.log(restaurant.getEmployeeNamesAsString());
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
