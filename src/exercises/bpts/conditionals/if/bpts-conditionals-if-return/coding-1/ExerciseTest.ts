
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
function isPersonTall(personHeightCm: number): #1# {
  const minimalTallHeightCm: number = 185;
  if (personHeightCm >= minimalTallHeightCm) {
    return #2#;
  }
  return #3#;
}
`;

const expectedSolutionText: string = `
function isPersonTall(personHeightCm: number): boolean {
  const minimalTallHeightCm: number = 185;
  if (personHeightCm >= minimalTallHeightCm) {
    return true;
  }
  return false;
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
