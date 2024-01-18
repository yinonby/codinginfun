
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
I'm a tree!
`;

const explanation: string = `
The variable <<plant>> is assigned an instance of class <<Tree>>. Therefore,
when calling <<printSummary()>>, the method that is called is the one
defined in <<Tree>> class.
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
        "Note how many times the function is called. Also note the quotes are included in the output."
      );
    }
  }

}
