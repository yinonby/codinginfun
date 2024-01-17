
import RunnableCodingExerciseTestAbs from "../../../../../../../infra/test/RunnableCodingExerciseTestAbs";

const initialSolutionText: string = `
`;

const expectedSolutionText: string = `
const COFFEE_NESPRESSO: string = "Nespresso coffee";
const COFFEE_DELONGHI: string = "DeLonghi coffee";

abstract class CoffeeMaker {
  public abstract getCoffee(): string;
}

class NespressoCoffeeMaker extends CoffeeMaker {
  public getCoffee(): string {
    return COFFEE_NESPRESSO;
  }
}

class DeLonghiCoffeeMaker extends CoffeeMaker {
  public getCoffee(): string {
    return COFFEE_DELONGHI;
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

