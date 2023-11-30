
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
// Code is duplicated
console.log("My name is Jessica");
console.log("My name is Bob");
console.log("My name is Lisa");

// Code is not duplicated
function printMyName(myName: string): void {
  console.log("My name is " + ?);
}
printMyName(?);
printMyName(?);
printMyName(?);
`;

const expectedSolutionText: string = `
// Code is duplicated
console.log("My name is Jessica");
console.log("My name is Bob");
console.log("My name is Lisa");

// Code is not duplicated
function printMyName(myName: string): void {
  console.log("My name is " + myName);
}
printMyName("Jessica");
printMyName("Bob");
printMyName("Lisa");
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
