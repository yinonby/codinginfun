
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Spy {
  #1# getName(): string {
    return "Lisa";
  }

  #2# getInitial(): string {
    return this.getName()[0];
  }
}
`;

const expectedSolutionText: string = `
class Spy {
  private getName(): string {
    return "Lisa";
  }

  public getInitial(): string {
    return this.getName()[0];
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

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Did you follow all code conventions?"
      );
    }
  }

}
