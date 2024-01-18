
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Plant {}

class Flower extends Plant {}

const plant: #1# = new #2#();
`;

const expectedSolutionText: string = `
class Plant {}

class Flower extends Plant {}

const plant: Plant = new Flower();
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
