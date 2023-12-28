
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
let x: number = 3;
#1#
console.log(x); // output: 7
`;

const expectedSolutionText: string = `
let x: number = 3;
x += 4;
console.log(x); // output: 7
`;

const explanationMd = `
- In the expression <<x += 4>> we used the Addition-Assignment operator <<+=>>
to add <<4>> to <<x>>, and assign the result (<<7>>) back to <<x>>.
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
