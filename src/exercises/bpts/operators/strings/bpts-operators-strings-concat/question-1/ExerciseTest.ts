
import QuestionExerciseTestAbs from "#infra/test/QuestionExerciseTestAbs";

const output: string = `
"ABC ABC"
"ABCDEFABC"
`;

const explanation: string = `
- The first print concatenates the string <<" ABC">> to the value of
<<x>> (<<"ABC">>), resulting in <<"ABC ABC">>.
- The second print concatenates the string <<"DEF">> to the value of
<<x>> (<<"ABC">>), resulting in <<"ABCDEF">>; then, the value of
<<x>> (<<"ABC">>) is concatenated to <<"ABCDEF">>, resulting in
<<"ABCDEFABC">>.
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
