
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const availableMilkshakes: string[] = ["Chocolate", "Vanilla",
  "Strawberry-Chocolate"];

// Function to return a milkshake taste according to 2 choices, if available,
// or the first available choice if none of the choices is available
function getMilkshake(firstChoice: string, secondChoice: string): string {
  if (#1#) {
    return firstChoice;
  } #2# (availableMilkshakes.includes(secondChoice)) {
    return secondChoice;
  } else {
    return availableMilkshakes[0];
  }
}
`;

const expectedSolutionText: string = `
const availableMilkshakes: string[] = ["Chocolate", "Vanilla",
  "Strawberry-Chocolate"];

// Function to return a milkshake taste according to 2 choices, if available,
// or the first available choice if none of the choices is available
function getMilkshake(firstChoice: string, secondChoice: string): string {
  if (availableMilkshakes.includes(firstChoice)) {
    return firstChoice;
  } else if (availableMilkshakes.includes(secondChoice)) {
    return secondChoice;
  } else {
    return availableMilkshakes[0];
  }
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
