
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"This restaurant offers a buffet!"
"This is a nice restaurant!"
`;

const explanation: string = `
- First, the member method <<printMenu()>> prints
<<"This restaurant offers a buffet!">> to the output.
- Then, it returns the string <<"This is a nice restaurant!">> which is
printed to the output by the built-in method <<console.log()>>.
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
