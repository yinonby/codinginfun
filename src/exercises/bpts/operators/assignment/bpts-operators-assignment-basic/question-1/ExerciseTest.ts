
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
0
`;

const explanation: string = `
- <<x>> is initialized with the value <<4>>.
- <<x>> (now <<4>>) is divided by <<4>>, and the result (<<1>>) is assigned \
back to x.
- <<13>> is added to <<x>> (now <<1>>), and the result (<<14>>) is assigned \
back to x.
- <<x>> (now <<14>>) is divided by <<3>>, and the remainder (<<2>>) is \
assigned back to x.
- <<2>> is subtracted from <<x>> (now <<2>>), and the result (<<0>>) is \
assigned back to x.
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
