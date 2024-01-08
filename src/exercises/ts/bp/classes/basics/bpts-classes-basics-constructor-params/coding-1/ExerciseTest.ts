
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  constructor(#1#) {
    console.log("A new " + foodType + " restaurant has been created!");
  }
}

const italianRestaurant: Restaurant = new Restaurant(#2#); // output: "A new Italian restaurant has been created!"
`;

const expectedSolutionText: string = `
class Restaurant {
  constructor(foodType: string) {
    console.log("A new " + foodType + " restaurant has been created!");
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian"); // output: "A new Italian restaurant has been created!"
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
