
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
const isFast: boolean = false;
const isFurious: boolean = false;
?
`;

const expectedSolutionText: string = `
const isFast: boolean = false;
const isFurious: boolean = false;
const isSlowOrFurious: boolean = !isFast || isFurious;
`;

const explanationMd = `
- We added a declaration of a constant variable <<isSlowOrFurious>> of
type <<boolean>> and initialized as requested. The value of
<<isSlowOrFurious>> is <<true>> because the value of <<!isFast>> is
<<true>>.
`;

export default class ExerciseTest extends CodingExerciseTestAbs {

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedExplanationMd(): string {
    return explanationMd.replace(/^\s+|\s+$/g, '');
  }

}
