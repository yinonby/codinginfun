
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  constructor(public foodType: string) {
  }

  public getFoodType(): string {
    return #1#;
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian");
console.log(italianRestaurant.#2#);
`;

const expectedSolutionText: string = `
class Restaurant {
  constructor(public foodType: string) {
  }

  public getFoodType(): string {
    return this.foodType;
  }
}

const italianRestaurant: Restaurant = new Restaurant("Italian");
console.log(italianRestaurant.getFoodType());
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
