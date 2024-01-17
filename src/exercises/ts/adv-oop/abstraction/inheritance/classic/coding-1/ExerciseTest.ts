
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

class NespressoCoffeeMaker extends CoffeeMaker {
  public #1#(): void {
    console.log("I'm a Nespresso making coffee!");
  }
}
`;

const expectedSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

class NespressoCoffeeMaker extends CoffeeMaker {
  public makeCoffee(): void {
    console.log("I'm a Nespresso making coffee!");
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
