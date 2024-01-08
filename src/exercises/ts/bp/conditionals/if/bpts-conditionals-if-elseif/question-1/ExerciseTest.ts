
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Cold planet!"
`;

const explanation: string = `
- The <<if>> condition is not met because the value of <<plantName>>
is neither "Venus" nor "Mercury".
- The <<else if>> condition is not met because the value of <<plantName>>
is neither "Earth" nor "Mars".
- Therefore, the <<else>> statement is executed.
`;

export default class ExerciseTest extends QuestionExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getExpectedSolutionText(): string {
    return output.replace(/^\s+|\s+$/g, '');
  }

  getExpectedExplanationMd(): string {
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
