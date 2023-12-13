
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isSunShining: boolean = true;

if (isSunShining) {
  console.log("The sun is shining!");
} #1# {
  console.log("The sun has set!");
}
`;

const expectedSolutionText: string = `
const isSunShining: boolean = true;

if (isSunShining) {
  console.log("The sun is shining!");
} else {
  console.log("The sun has set!");
}
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

  getExpectedSolutionRowNum() {
    return this.getExpectedSolutionText().split(/\n/).length;
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
