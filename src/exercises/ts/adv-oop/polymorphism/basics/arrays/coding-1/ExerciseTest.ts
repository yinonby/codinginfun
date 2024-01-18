
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Plant {}

class Flower extends Plant {}

class Tree extends Plant {}

const plants: Plant[] = [];
plants.push(#1#);
plants.push(#2#);
`;

const expectedSolutionText: string = `
class Plant {}

class Flower extends Plant {}

class Tree extends Plant {}

const plants: Plant[] = [];
plants.push(new Flower());
plants.push(new Tree());
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
