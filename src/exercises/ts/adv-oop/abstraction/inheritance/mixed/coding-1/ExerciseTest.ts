
import CodingExerciseTestAbs from "#infra/test/CodingExerciseTestAbs";

const initialSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

#1# class AdvancedCoffeeMaker extends CoffeeMaker {
  public abstract makeMilkFoam(): void;
}
`;

const expectedSolutionText: string = `
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

abstract class AdvancedCoffeeMaker extends CoffeeMaker {
  public abstract makeMilkFoam(): void;
}
`;

const explanationMd = `
Since class <<AdvancedCoffeeMaker>> doesn't implement abstract method
<<makeCoffee()>>, it must be declared abstract.
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
