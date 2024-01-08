
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
0
"I want an igloo!" 
`;

const explanation: string = `
- In the first call to the member method <<printMessage()>>,
the value of the member property <<counter>> is <<0>>. Therefore, the
<<if>> condition is not met, the value of <<this.counter>> is
printed to the output, and <<this.counter>> is incremented by <<1>>.
Remember that member properties are saved inside the instance and
they preservce their value for the same instance.

- In the second call to the member method <<printMessage()>>,
the value of the member property <<counter>> is <<1>>. Therefore, the
<<if>> condition is met, and the value returned by the member
method <<getMessage()>> is printed to the output.
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
