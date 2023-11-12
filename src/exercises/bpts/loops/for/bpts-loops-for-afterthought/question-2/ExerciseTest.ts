
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"begin"
-1
0
1
"end"
`;

const explanation: string = `
- The loop variable <<i>> is initialized with the value <<-2>>.
- As long as <<i>> is less than or equal to <<0>>, the loop keeps iterating.
- The afterthought is empty.
- Inside the statement, we increment <<i>> by <<1>>, and only then \
the new value is printed to the output (note the use of Pre Increment \
operator).
- In the 1st iteration, <<i>> is queal to <<-2>>, incremented by <<1>>, \
(now <<-1>>), and then printed to the output.
- In the 2nd iteration, <<i>> is queal to <<-1>>, incremented by <<1>>, \
(now <<0>>), and then printed to the output.
- In the 3rd iteration, <<i>> is queal to <<0>>, incremented by <<1>>, \
(now <<1>>), and then printed to the output.
- In the 4th iteration, <<i>> is queal to <<1>>, the condition \
<<i <= 0>> is not met, and the loop ends.
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
