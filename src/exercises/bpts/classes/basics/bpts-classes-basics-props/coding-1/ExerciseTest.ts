
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  #1# foodType: string;

  constructor(foodType: string) {
    #2# = foodType;
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian");
`;

const expectedSolutionText: string = `
class Restaurant {
  public foodType: string;

  constructor(foodType: string) {
    this.foodType = foodType;
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian");
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
