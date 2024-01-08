
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
const myName: string = "John";

function foo() {
    const myName: string = "Bob";
    console.log("Inside foo: myName is:");
    console.log(myName);
}

console.log("Outside foo: myName is:");
console.log(myName);
foo();";
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
