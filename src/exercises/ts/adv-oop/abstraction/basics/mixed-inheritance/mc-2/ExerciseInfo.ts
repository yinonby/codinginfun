
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
abstract class CoffeeMaker {
  public abstract grindCoffee(): void;
  public abstract makeCoffee(): void;
}

abstract class CapsuleCoffeeMaker extends CoffeeMaker {
  public grindCoffee(): void {
    console.log("I'm a Capsule Coffee Maker so I don't grind coffee!");
  }
}

class NespressoCoffeeMaker extends CapsuleCoffeeMaker {
  public makeCoffee(): void {
    console.log("I'm a Nespresso making coffee!");
  }
}
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_MULTICHOICE;
  }

  getMdInstructions(): string {
    return md;
  }

}
