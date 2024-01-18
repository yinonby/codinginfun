
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Plant {}

class Flower extends Plant {}

function printPlantInfo(plant: #1#): void {
  if (plant instanceof Flower) {
    console.log("plant is a Flower!");
  } else {
    console.log("plant is not a Flower!");
  }
}

printPlantInfo(#2#);
printPlantInfo(#3#);
`;

const expectedSolutionText: string = `
class Plant {}

class Flower extends Plant {}

function printPlantInfo(plant: Plant): void {
  if (plant instanceof Flower) {
    console.log("plant is a Flower!");
  } else {
    console.log("plant is not a Flower!");
  }
}

printPlantInfo(new Flower());
printPlantInfo(new Plant());
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
