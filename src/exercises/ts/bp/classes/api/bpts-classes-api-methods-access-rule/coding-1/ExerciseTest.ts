
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Company {
  private employeeNames: string[] = [];

  constructor(private companyName: string) {
  }

  #1# getCompanyName(): string {
    return this.companyName;
  }

  #2# setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  #3# addEmployee(employeeName: string): void {
    // verify employee has not already been added
    if (this.isEmployeeInList(employeeName)) {
      console.log("Employee " + employeeName + " already exists");
      return;
    }

    this.employeeNames.push(employeeName);
    console.log("Employee " + employeeName + " added");
  }

  // used internally only, to check if this employee is already in the list
  #4# isEmployeeInList(employeeName: string): boolean {
    return this.employeeNames.includes(employeeName);
  }
}
`;

const expectedSolutionText: string = `
class Company {
  private employeeNames: string[] = [];

  constructor(private companyName: string) {
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }

  public addEmployee(employeeName: string): void {
    // verify employee has not already been added
    if (this.isEmployeeInList(employeeName)) {
      console.log("Employee " + employeeName + " already exists");
      return;
    }

    this.employeeNames.push(employeeName);
    console.log("Employee " + employeeName + " added");
  }

  // used internally only, to check if this employee is already in the list
  private isEmployeeInList(employeeName: string): boolean {
    return this.employeeNames.includes(employeeName);
  }
}
`;

const explanationMd = `
- Member methods <<getCompanyName()>> and <<setCompanyName()>> are
getter/setter methods, and should be <<public>>.
- Member method <<addEmployee()>> is an API method, and should be
<<public>>.
- Member method <<isEmployeeInList()>> is used internally, and
should be <<private>>.
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
