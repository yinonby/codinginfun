
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Spy {
  private name: string = "Bob";

  private getName(): string {
    return this.name;
  }

  public getInitial(): string {
    return this.getName()[0];
  }
}

const spy: Spy = new Spy();
console.log(spy.getInitial());
<<<<
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_QUESTION;
  }

  getMdInstructions(): string {
    return md;
  }

}
