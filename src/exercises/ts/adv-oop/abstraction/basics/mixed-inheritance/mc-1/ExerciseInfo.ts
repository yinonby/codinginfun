
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

class CapsuleCoffeeMaker extends CoffeeMaker {
  public abstract openCapsuleCompartment(): void;
}

class NespressoCoffeeMaker extends CapsuleCoffeeMaker {
  public openCapsuleCompartment(): void {
    console.log("I'm a Nespresso making coffee!");
  }

  public openCapsuleCompartment(): void {
    console.log("I'm a Nespresso opening my capsule compartment!");
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
