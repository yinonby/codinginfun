
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
  private getEmployeeNames(): string[] {
    return this.employeeNames;
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }

  public printSummary(): void {
    console.log("Restaurant: " + this.restaurantName);
    console.log("Employees: " + this.getEmployeeNames())
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
