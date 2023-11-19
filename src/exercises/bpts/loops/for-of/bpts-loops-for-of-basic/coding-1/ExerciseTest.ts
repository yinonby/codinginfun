
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const fruits: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
for (const fruit #1# fruits) {
  console.log(#2#);
}
`;

const expectedSolutionText: string = `
const fruits: string[] = ["Strawberry", "Banana", "Apple", "Mango"];
for (const fruit of fruits) {
  console.log(fruit);
}
`;

const explanationText = `
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
