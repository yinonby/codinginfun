
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Plant {}

class Flower extends Plant {}

const plant: Plant = new Flower();
if (plant #1# Flower) {
  console.log("plant is a Flower");
} else {
  console.log("plant is not a Flower");
}
`;

const expectedSolutionText: string = `
class Plant {}

class Flower extends Plant {}

const plant: Plant = new Flower();
if (plant instanceof Flower) {
  console.log("plant is a Flower");
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
