
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"Bob"
`;

const explanation: string = `
- In the first call to <<printSomething>> (<<x>> = 20),
the <<if>> condition is met and <<printSomeName>>
is called (<<x>> = 20). Then (in <<printSomeName>>),
the first <<if>> condition is met,
a new variable <<name>> variable is initialized to <<"Bob">>
and printed to the output.
- In the second call to <<printSomething>> (<<x>> = 20),
the <<if>> condition is not met, and we go into the <<else>>,
where <<printSomeFood>> is called (<<x>> = 20).
Then (in <<printSomeFood>>), neither condition is met,
and nothing is printed to the output.
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
