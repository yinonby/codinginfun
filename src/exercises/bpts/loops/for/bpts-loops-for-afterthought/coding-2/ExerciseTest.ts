
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
for (let i: number = 3; i <= 4;) {
    console.log(i++);
}
`;

const explanationText = `
- We declared the loop as requested, following all code conventions.
- We left the loop's afterthought empty, and incremented the variable \
<<i>> from within the loop.
- Note that when we leave the afterthought empty, we must \
still place a semicolon <<;>> at the end of the condition <<i <= 4;>>.
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
