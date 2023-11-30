
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"B"
`;

const explanation: string = `
The class member method <<getInitial()>> is declared <<public>>.
Therefore, the first letter of <<"Bob">> is printed.
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
