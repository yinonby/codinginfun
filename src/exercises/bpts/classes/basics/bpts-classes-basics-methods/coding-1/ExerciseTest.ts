
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  #1# {
    console.log("This restaurant offers a buffet!");
  }
}

const restaurant: Restaurant = new Restaurant();
restaurant.#2#;
`;

const expectedSolutionText: string = `
class Restaurant {
  public printMenu(): void {
    console.log("This restaurant offers a buffet!");
  }
}

const restaurant: Restaurant = new Restaurant();
restaurant.printMenu();
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
