
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
let userInput: string | null = prompt("Enter the word 'Hello'!");
#1# (#2# !== "Hello") {
  userInput = prompt("Enter the word 'Hello'!");
}
`;

const expectedSolutionText: string = `
let userInput: string | null = prompt("Enter the word 'Hello'!");
while (userInput !== "Hello") {
  userInput = prompt("Enter the word 'Hello'!");
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

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
