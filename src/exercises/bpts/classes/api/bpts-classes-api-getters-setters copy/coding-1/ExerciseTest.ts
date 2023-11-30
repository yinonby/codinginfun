
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Company {
  constructor(private companyName: string) {
  }

  public getCompanyName(): string {
    #1#
  }

  public setCompanyName(companyName: string): void {
    #2#
  }
}
`;

const expectedSolutionText: string = `
class Company {
  constructor(private companyName: string) {
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }
}
`;

const explanationMd = `
- The getter method <<getCompanyName()>> should return <<this.companyName>>.
- The setter method <<setCompanyName()>> should assign the value given
by the parameter <<companyName>> to the member property <<this.companyName>>.
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
