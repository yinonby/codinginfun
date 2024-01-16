
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
abstract class CoffeeMaker {
  constructor(private brandName: string) {}

  public abstract makeCoffee(): void;

  public getBrandName(): string {
    return this.brandName;
  }
}

const coffeeMaker: CoffeeMaker = new CoffeeMaker("Nespresso");
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
