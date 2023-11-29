
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const fruits: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
for (let i: number = 0; i < ?; i++) {
  console.log(?);
}
`;

const expectedSolutionText: string = `
const fruits: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
for (let i: number = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
`;

const explanationText = `
- The loop condition is <<i < fruits.length>>. The length of the
<<fruits>> array is <<4>>, so when <<i>> equals 0, 1, 2, and 3,
the condition is met and the statement is executed. And when <<i>>
equals 4, then the loop execution ends. Remember that the last
element of an array is always at an index of the array size minus 1
<<fruits.length - 1>>.
- In order to access the i-th element of the array, we use
<<fruits[i]>>, the first element being at an index of <<0>>, and the
last element at an index of <<3>> (<<fruits.length - 1>>).
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
        "Did you follow code conventions?"
      );
    }
  }

}
