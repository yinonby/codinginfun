
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"A new square has been created!"
"A new shape has been created!"
`;

const explanation: string = `
- When the instance of the <<Child>> class is created, it first prints
to the output, and only then calls the parent constructor using
<<super()>>.
- While it is not a good practice to do anything before calling
<<super()>>, it's possible as long as we aren't accessing class members
using keyword <<this>>.
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
