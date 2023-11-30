
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
false
`;

const explanation: string = `
- Note that the loop condition is <<i < fruitNames.length - 1>>,
meaning that the last array element to be searched is the element
with index <<fruitNames.length - 2>> and the value <<"Apple">> -
which is the element before the last element.
Therefore, the last element with the value <<"Mango">> is never searched.
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
