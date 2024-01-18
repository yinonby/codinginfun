
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
plant is a Tree!
`;

const explanation: string = `
- In the 1st assignment to the variable <<plant>>, we assign an instance of
class <<Flower>>. Therefore, the evaluation with <<instanceof Tree>>
is <<false>>.
- In the 2nd assignment to the variable <<plant>>, we assign an instance of
class <<Tree>>. Therefore, the evaluation with <<instanceof Tree>>
is <<true>>.
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
