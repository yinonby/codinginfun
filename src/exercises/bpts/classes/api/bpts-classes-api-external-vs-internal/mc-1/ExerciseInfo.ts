
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
In the following example, is the member property <<employeeNames>>
internal or external?

>>>>
class Company {
  private employeeNames: string[] = [];

  constructor(private companyName: string) {
  }

  public addEmployee(employeeName: string): string {
    this.employeeNames.push(employeeName);
  }

  public printSummary(): string {
    const employeeNamesStr = this.getEmployeeNames().join(",");
    console.log("Company employees: " + employeeNamesStr);
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
