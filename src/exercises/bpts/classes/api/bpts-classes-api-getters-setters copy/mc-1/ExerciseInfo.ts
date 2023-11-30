
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class Company {
  constructor(private companyName: string) {
  }

  private getCompanyName(): string {
    return this.companyName;
  }

  private setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }
}

const company: Company = new Company("Google");
console.log(company.getCompanyName());
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
