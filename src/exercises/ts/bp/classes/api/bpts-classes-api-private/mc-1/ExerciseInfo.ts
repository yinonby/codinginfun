
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Spy {
  private name: string = "Lisa";

  private getName(): string {
    return this.name;
  }

  private getInitial(): string {
    return this.getName()[0];
  }
}

const spy: Spy = new Spy();
console.log(spy.getInitial());
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
