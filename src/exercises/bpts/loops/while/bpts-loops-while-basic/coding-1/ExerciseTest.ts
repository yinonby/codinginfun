
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

export default class ExerciseTest extends CodingExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionRowNum() {
    return this.getExpectedSolutionText().split(/\n/).length;
  }

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Did you match the return-type to the type of the return-value?"
      );
    }
  }

}
