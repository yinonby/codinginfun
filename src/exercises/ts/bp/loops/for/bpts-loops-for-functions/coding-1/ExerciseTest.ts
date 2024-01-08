
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
function printZeroTillNum(n: number): void {
  for (let i: number = 0; i #1# n; i++) {
    console.log(i);
  }
}
printZeroTillNum(#2#);
`;

const expectedSolutionText: string = `
function printZeroTillNum(n: number): void {
  for (let i: number = 0; i <= n; i++) {
    console.log(i);
  }
}
printZeroTillNum(543);
`;

const explanationMd = `
- The task was to implement <<printZeroTillNum>> so that it prints
all numbers from <<0>> to the value of <<n>>, **including** <<n>>.
Therefore, we must use a Less-Than-or-Equal operator <<<=>> in order
to include the value of <<n>>.
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionRowNum() {
    return this.getExpectedSolutionText().split(/\n/).length;
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
