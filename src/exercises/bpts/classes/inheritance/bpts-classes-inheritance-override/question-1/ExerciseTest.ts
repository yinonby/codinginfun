
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"I'm a square!"
`;

const explanation: string = `
This one is a bit tricky:
- It's easy to see that member method <<getMessage2()>>
is only defined in the parent class <<Shape>>.
- However, even though <<getMessage2()>> is defined in the parent class,
when it is accessing <<this.getMessage1()>>, it is still
accessing the overridden method in the child class <<Square>>.
- Remember: using the keyword <<this>> always refers to the whole instance.
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
