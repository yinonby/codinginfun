
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

export default class ExerciseTest extends CodingExerciseTestAbs {

  verify(solutionText: string) {
    this.verifySolution(solutionText);
  }

  getInitialSolutionText(): string {
    return initialSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  verifySolution(solutionText: string) {
    if (solutionText !== this.getExpectedSolutionText()) {
      throw new Error(
        "Did you follow all code conventions?"
      );
    }
  }

}
