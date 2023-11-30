
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Google"
"Apple"
`;

const explanation: string = `
- First, an instance of class <<Company>> is created with a company name
of <<"Google">>.
- Then, the current company name <<"Google">> is printed to the output.
- Then, the company name is changed to <<"Facebook">>.
- Then, the company name is changed to <<"Apple">>.
- Then, the current company name <<"Apple">> is printed to the output.
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
