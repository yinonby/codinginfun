
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
#1# Restaurant {}
const restaurant: Restaurant = #2# Restaurant();
`;

const expectedSolutionText: string = `
class Restaurant {}
const restaurant: Restaurant = new Restaurant();
`;

const explanationMd = `
We use the keyword <<class>> to define <<Restaurant>>, and the keyword
<<new>> to create a new instance.
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
