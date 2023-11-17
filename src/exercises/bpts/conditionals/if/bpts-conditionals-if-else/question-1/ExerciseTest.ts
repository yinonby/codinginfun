
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
false
false
true
`;

const explanation: string = `
- In the first 2 calls to <<isCloserToTheSunThanEarth>>, the <<if>>
condition is not met. Therefore, <<false>> is returned.
- In the last call, the <<if>> condition is met since the value of
<<plantName>> equals <<"Mercury">>. Therefore, <<true>> is returned.
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
