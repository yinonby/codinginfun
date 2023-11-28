
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  constructor(public restaurantName: string) {
  }

  public getRestaurantName(): string {
    return this.restaurantName;
  }

  public setRestaurantName(newRestaurantName: string): void {
    #1#;
  }
}

const restaurant: Restaurant = new Restaurant("Pizza Pino");
restaurant.#2#("Pizza Italy");
`;

const expectedSolutionText: string = `
class Restaurant {
  constructor(public restaurantName: string) {
  }

  public getRestaurantName(): string {
    return this.restaurantName;
  }

  public setRestaurantName(newRestaurantName: string): void {
    this.restaurantName = newRestaurantName;
  }
}

const restaurant: Restaurant = new Restaurant("Pizza Pino");
restaurant.setRestaurantName("Pizza Italy");
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
