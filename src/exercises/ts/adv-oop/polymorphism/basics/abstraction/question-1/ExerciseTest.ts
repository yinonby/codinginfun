
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"I'm a growing tree!"
"I'm a growing tree!"
"I'm a growing flower!"
`;

const explanation: string = `
- A polymorphic array of abstract type <<Plant[]>> is passed to the function.
- Each item of the array is an instance of a child class of class <<Plant>>.
- Each such child class has its own implementation of the abstract method
<<grow()>>.
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
