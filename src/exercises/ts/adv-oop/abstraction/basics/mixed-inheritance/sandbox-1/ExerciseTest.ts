
import RunnableCodingExerciseTestAbs from "../../../../../../../infra/test/RunnableCodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
const COFFEE_TYPE_FILTER: string = "Filter coffee type";
const COFFEE_MELITTA: string = "Melitta coffee";
const COFFEE_RUSSEL_HOBBS: string = "Russel Hobbs coffee";

abstract class CoffeeMaker {
  public abstract getCoffeeType(): string;
  public abstract getCoffee(): string;
}

abstract class FilterCoffeeMaker {
  public getCoffeeType(): string {
    return COFFEE_TYPE_FILTER;
  }
}

class MelittaFilterCoffeeMaker extends FilterCoffeeMaker {
  public getCoffee(): string {
    return COFFEE_MELITTA;
  }
}

class RusselHobbsFilterCoffeeMaker extends FilterCoffeeMaker {
  public getCoffee(): string {
    return COFFEE_RUSSEL_HOBBS;
  }
}
`;

const explanationMd = `
`;

export default class Test extends RunnableCodingExerciseTestAbs {

  verify() {
    this.verifySolution();
  }

  run() {
    this.runSolution();
  }

  getExpectedSolutionText(): string {
    return expectedSolutionText.replace(/^\s+|\s+$/g, '');;
  }

  verifySolution() {
  }

  runSolution() {
  }

}

