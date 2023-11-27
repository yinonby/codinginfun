
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Italian"
"Indian"
"Thai"
`;

const explanation: string = `
- The variable <<restaurants>> is an array of class <<Restaurant>>.
Each item in the array is an instance of the class <<Restaurant>>.
The array is initialized with 3 instances. For each instance, upon
its creation, the constructor prints the value of the parameter
<<foodType>> to the output.
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
