
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isFast: boolean = false;
const isFurious: boolean = false;
?
`;

const expectedSolutionText: string = `
const isFast: boolean = false;
const isFurious: boolean = false;
const isSlowOrFurious: boolean = !isFast || isFurious;
`;

const explanationText = `
- We added a declaration of a constant variable <<isSlowOrFurious>> of \
type <<boolean>> and initialized as requested. The value of \
<<isSlowOrFurious>> is <<true>> because the value of <<!isFast>> is \
<<true>>.
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
