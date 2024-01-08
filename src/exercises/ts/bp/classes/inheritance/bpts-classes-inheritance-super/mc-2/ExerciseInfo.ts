
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Shape {
  constructor() {
  }
}

class Square extends Shape {
  private areaSquareCm: number;

  constructor(private sideSizeCm: number) {
    this.areaSquareCm = sideSizeCm * sideSizeCm;
    super();
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
