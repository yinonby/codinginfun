
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
class Restaurant {
  public creationMessage: string = "A new restaurant has been created!";

  constructor() {
    console.log(#1#);
  }
}
`;

const expectedSolutionText: string = `
class Restaurant {
  public creationMessage: string = "A new restaurant has been created!";

  constructor() {
    console.log(this.creationMessage);
  }
}
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
