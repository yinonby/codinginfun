
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

const explanationMd = `
The correct keyword is <<constructor>>, while the class name
<<Restaurant>> should be used to create a new instance.
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
