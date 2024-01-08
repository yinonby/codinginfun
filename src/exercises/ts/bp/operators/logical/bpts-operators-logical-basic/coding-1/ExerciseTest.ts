
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isFast: boolean = true;
const isFurious: boolean = false;
#1#
`;

const expectedSolutionText: string = `
const isFast: boolean = true;
const isFurious: boolean = false;
const isFastAndFurious: boolean = isFast && isFurious;
`;

const explanationMd = `
- We added a declaration of a constant variable <<isFastAndFurious>> of
type <<boolean>> and initialized as requested. The value of
<<isFastAndFurious>> is <<false>> because the value of <<isFurious>> is
<<false>>.
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
