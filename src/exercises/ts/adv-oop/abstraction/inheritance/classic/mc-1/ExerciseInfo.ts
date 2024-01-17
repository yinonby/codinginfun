
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
abstract class CoffeeMaker {
  public abstract makeCoffee(): void;
}

class NespressoCoffeeMaker extends CoffeeMaker {
  public makeEspresso(): void {
    console.log("I'm a Nespresso making espresso!");
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
