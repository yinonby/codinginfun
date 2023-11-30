
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const availableMilkshakes: string[] = ["Chocolate", "Vanilla",
  "Strawberry-Chocolate"];

// Function to return a milkshake taste according to 2 choices, if available,
// or the first available choice if none of the choices is available
function getMilkshake(firstChoice: string, secondChoice: string): string {
  #1# (availableMilkshakes.includes(firstChoice)) {
    return firstChoice;
  } #2# {
    #3# (availableMilkshakes.includes(secondChoice)) {
      return secondChoice;
    } #4# {
      return availableMilkshakes[0];
    }
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
  } else {
    if (availableMilkshakes.includes(secondChoice)) {
      return secondChoice;
    } else {
      return availableMilkshakes[0];
    }
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
