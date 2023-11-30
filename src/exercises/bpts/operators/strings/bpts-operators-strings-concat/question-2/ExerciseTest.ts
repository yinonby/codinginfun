
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"abbaabbaabbaabba"
`;

const explanation: string = `
- We declared a non-constant variable <<str>> of type <<string>>, and
initialized it with <<"abba">>.
- Then, we concatenated the value of <<x>> (now <<"abba">>) to itself,
resulting in <<"abbaabba">>, and assigned it back to <<x>>.
- Then, we concatenated the value of <<x>> (now <<"abbaabba">>) to itself,
resulting in <<"abbaabbaabbaabba">>, and assigned it back to <<x>>.
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
