
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
function printSunStatus(isSunShining: boolean): void {
  if (isSunShining) {
    console.log("The sun is shining!");
  } #1# {
    console.log("The sun has set!");
  }
}
`;

const expectedSolutionText: string = `
function printSunStatus(isSunShining: boolean): void {
  if (isSunShining) {
    console.log("The sun is shining!");
  } else {
    console.log("The sun has set!");
  }
}
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionRowNum() {
    return this.getExpectedSolutionText().split(/\n/).length;
  }

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Did you match the return-type to the type of the return-value?"
      );
    }
  }

}
