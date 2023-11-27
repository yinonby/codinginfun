
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  #1#() {
    console.log("A new restaurant has been created!");
  }
}

const restaurant: Restaurant = new #2#(); // output: "A new restaurant has been created!"
`;

const expectedSolutionText: string = `
class Restaurant {
  constructor() {
    console.log("A new restaurant has been created!");
  }
}

const restaurant: Restaurant = new Restaurant(); // output: "A new restaurant has been created!"
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
        "Did you use the keyword <<class>> to define <<Restaurant>>? Did you use the keyword <<new>> to instantiate a new instance?"
      );
    }
  }

}
