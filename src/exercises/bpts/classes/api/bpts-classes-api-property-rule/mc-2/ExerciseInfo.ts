
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
In this example, what access should be granted to the member
property <<founderName>> outside the class?

>>>>
class Company {
  private employeeNames: string[] = [];

  constructor(private founderName: string, private companyName: string) {
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
