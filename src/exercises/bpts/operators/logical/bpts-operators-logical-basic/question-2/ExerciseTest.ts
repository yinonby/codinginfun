
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
false
false
true
`;

const explanation: string = `
- The expression <<!isFast>> evaluates to <<!true>>, which evaluates \
to <<false>>.
- The expression <<!isFast && !isFurious>> evaluates to \
<<!true && !false>>, which evaluates to <<false && true>>, \
which evaluates to <<false>>.
- The expression <<!isFast || !isFurious>> evaluates to \
<<!true || !false>>, which evaluates to <<false || true>>, \
which evaluates to <<true>>.
`;

export default class ExerciseTest extends QuestionExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getExpectedSolutionText(): string {
    return output.replace(/^\s+|\s+$/g, '');
  }

  getExpectedSolutionExplanation(): string {
    return explanation.replace(/^\s+|\s+$/g, '');
  }

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Look carefually at the code."
      );
    }
  }

}
