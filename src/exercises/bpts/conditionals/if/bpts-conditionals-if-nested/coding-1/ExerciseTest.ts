
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isSunShining: boolean = false;
const isMoonUp: boolean = true;

if (#1#) {
  console.log("The sun is shining!");
} else {
  if (#2#) {
    console.log("The moon is up!");
  } else {
    console.log("There is darkness!");
  }
}
`;

const expectedSolutionText: string = `
const isSunShining: boolean = false;
const isMoonUp: boolean = true;

if (isSunShining) {
  console.log("The sun is shining!");
} else {
  if (isMoonUp) {
    console.log("The moon is up!");
  } else {
    console.log("There is darkness!");
  }
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
