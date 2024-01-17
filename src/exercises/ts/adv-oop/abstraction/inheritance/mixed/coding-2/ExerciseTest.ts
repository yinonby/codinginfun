
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

abstract class AdvancedCoffeeMaker extends CoffeeMaker {
  public abstract makeMilkFoam(): void;
}

class NespressoCoffeeMaker extends AdvancedCoffeeMaker {
  public #1#(): void {
    console.log("I'm a Nespresso making coffee!");
  }

  public #2#(): void {
    console.log("I'm a Nespresso making milk foam!");
  }
}
`;

const expectedSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

abstract class AdvancedCoffeeMaker extends CoffeeMaker {
  public abstract makeMilkFoam(): void;
}

class NespressoCoffeeMaker extends AdvancedCoffeeMaker {
  public makeCoffee(): void {
    console.log("I'm a Nespresso making coffee!");
  }

  public makeMilkFoam(): void {
    console.log("I'm a Nespresso making milk foam!");
  }
}
`;

const explanationMd = `
Class <<NespressoCoffeeMaker>> is a non-abstract class. Therefore, it
must implement both abstract methods from its parent abstract classses.
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
