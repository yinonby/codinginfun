
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Company {
  private employeeNames: string[] = [];

  public addEmployee(employeeName: string): void {
    this.employeeNames.push(employeeName);
  }

  // for internal use in this class only
  #1# getEmployeeNames(): string[] {
    return this.employeeNames;
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }
}
`;

const expectedSolutionText: string = `
class Company {
  private employeeNames: string[] = [];

  public addEmployee(employeeName: string): void {
    this.employeeNames.push(employeeName);
  }

  // for internal use in this class only
  private getEmployeeNames(): string[] {
    return this.employeeNames;
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }
}
`;

const explanationMd = `
We use accessibility modifier <<private>> to only allow access to member
method <<getEmployeeNames()>> inside the class.
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
