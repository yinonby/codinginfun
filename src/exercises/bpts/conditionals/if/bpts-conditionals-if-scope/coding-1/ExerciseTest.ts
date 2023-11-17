
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
function printSomeNumbers(flag: boolean): void {
  const x: number = #1#;

  if (flag) {
    const x: number = #2#;
    console.log(x);
  } else {
    console.log(x);
  }
}

printSomeNumbers(true);
printSomeNumbers(false);
`;

const expectedSolutionText: string = `
function printSomeNumbers(flag: boolean): void {
  const x: number = 10;

  if (flag) {
    const x: number = 20;
    console.log(x);
  } else {
    console.log(x);
  }
}

printSomeNumbers(true);
printSomeNumbers(false);
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
