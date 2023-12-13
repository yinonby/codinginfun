
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const flag: boolean = true;
const x: number = 10;

if (flag) {
  const x: number = #1#;
  console.log(x);
} else {
  console.log(x);
}
`;

const expectedSolutionText: string = `
const flag: boolean = true;
const x: number = 10;

if (flag) {
  const x: number = 20;
  console.log(x);
} else {
  console.log(x);
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
