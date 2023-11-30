
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
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
`;

const expectedSolutionText: string = `
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
`;

const explanationMd = `
The member method <<getName()>> should be declared <<private>> so
that it is not accessible from outside the class, while <<getInitial()>>
should be declared <<public>>.
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
