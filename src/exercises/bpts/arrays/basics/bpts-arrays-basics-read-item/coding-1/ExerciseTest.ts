
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const vegetables: string[] = ["Cucumber", "Carrot", "Pepper"];
console.log(vegetables[#1#]);
`;

const expectedSolutionText: string = `
const vegetables: string[] = ["Cucumber", "Carrot", "Pepper"];
console.log(vegetables[0]);
`;

const explanationMd = `
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
