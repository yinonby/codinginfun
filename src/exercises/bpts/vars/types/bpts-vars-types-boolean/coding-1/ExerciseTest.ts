
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
const isGreen: boolean = true;
console.log(isGreen);  
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
