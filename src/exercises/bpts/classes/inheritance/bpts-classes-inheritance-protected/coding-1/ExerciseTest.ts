
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Company {
  private employeeNames: string[] = [];

  public addEmployee(employeeName: string): void {
    this.employeeNames.push(employeeName);
  }

  // for internal use in this class only
  private getEmployeeNames(): string[] {
    return this.employeeNames;
  }

  // for internal use in this class and its subclasses
  #1# getEmployeeNamesAsString(): string {
    return this.getEmployeeNames().join(", ");
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }

  public printSummary(): void {
    console.log("Restaurant: " + this.restaurantName);
    console.log("Employees: " + this.getEmployeeNamesAsString())
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

  // for internal use in this class and its subclasses
  protected getEmployeeNamesAsString(): string {
    return this.getEmployeeNames().join(", ");
  }
}

class Restaurant extends Company {
  constructor(private restaurantName: string) {
    super();
  }

  public printSummary(): void {
    console.log("Restaurant: " + this.restaurantName);
    console.log("Employees: " + this.getEmployeeNamesAsString())
  }
}
`;

const explanationMd = `
- We use accessibility modifier <<protected>> to declare member
method <<getEmployeeNamesAsString()>> in the parent class <<Company>>.
- Therefore, <<getEmployeeNamesAsString()>> can only be accessed in the
parent class and child class (but not outside the classes).
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
