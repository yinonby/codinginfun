
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
function isPersonTall(personHeightCm: number): #1# {
  const minimalTallHeightCm: number = 185;
  if (personHeightCm >= minimalTallHeightCm) {
    return #2#;
  }
  return #3#;
}
`;

const expectedSolutionText: string = `
function isPersonTall(personHeightCm: number): boolean {
  const minimalTallHeightCm: number = 185;
  if (personHeightCm >= minimalTallHeightCm) {
    return true;
  }
  return false;
}
`;

const explanationMd = `
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
