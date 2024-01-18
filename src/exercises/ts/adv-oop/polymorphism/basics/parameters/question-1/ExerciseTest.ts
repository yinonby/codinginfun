
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Tree"
"Tree"
"Flower"
`;

const explanation: string = `
- A polymorphic array of type <<Plant[]>> is passed to the function.
- The 1st and 2nd items of the array (at indexes 0 and 1), are instances
of class <<Tree>>.
- The 3rd item (at index 2), is an instance of class <<Flower>>.
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
