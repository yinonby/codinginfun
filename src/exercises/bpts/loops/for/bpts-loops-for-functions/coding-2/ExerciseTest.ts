
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const fruitNames: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
function doesFruitExist(fruitName: string): boolean {
  for (let i: number = 0; i #1# fruitNames.length; i++) {
    if (fruitNames[i] === fruitName) {
      return #2#;
    }
  }
  return #3#;
}
`;

const expectedSolutionText: string = `
const fruitNames: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
function doesFruitExist(fruitName: string): boolean {
  for (let i: number = 0; i < fruitNames.length; i++) {
    if (fruitNames[i] === fruitName) {
      return true;
    }
  }
  return false;
}
`;

const explanationText = `
- When we iterate over an array, the last element is always the array size
minus <<1>>, therefore we use the Less-Than operator <<<>>.
- If we find a fruit with the name requested, the function should return
<<true>>.
- Otherwise, if we iterated through the whole array and haven't
found a matching fruit, then we return false.
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
        "Did you make sure to include 'n'? Did you follow code conventions?"
      );
    }
  }

}
