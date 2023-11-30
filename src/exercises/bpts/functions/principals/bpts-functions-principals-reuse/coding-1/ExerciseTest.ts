
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const squareOfTwo: number = 2 * 2;
const squareOfThree: number = 3 * 3;
const squareOfFour: number = 4 * 4;

function square(x: number): number {
    return ?;
}
`;

const expectedSolutionText: string = `
const squareOfTwo: number = square(2);
const squareOfThree: number = square(3);
const squareOfFour: number = square(4);

function square(x: number): number {
    return x * x;
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
