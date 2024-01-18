
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Flower"
"Tree"
"Flower"
`;

const explanation: string = `
- <<plants>> is a polymorphic array.
- The 1st and 3rd items of the array (at indexes 0 and 2), are instances
of class <<Flower>>.
- The 2nd item (at index 1), is an instance of class <<Tree>>.
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
