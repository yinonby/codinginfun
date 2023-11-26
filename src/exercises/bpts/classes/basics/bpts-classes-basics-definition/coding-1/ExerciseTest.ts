
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
#1# Restaurant {}
const restaurant = #2# Restaurant();
`;

const expectedSolutionText: string = `
class Restaurant {}
const restaurant = new Restaurant();
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
        "Did you use the keyword <<class>> to define <<Restaurant>>? Did you use the keyword <<new>> to instantiate a new instance?"
      );
    }
  }

}
