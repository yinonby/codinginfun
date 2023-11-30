
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class Company {
  constructor(private companyName: string) {
  }

  public getCompanyName(): string {
    return this.companyName;
  }

  public setCompanyName(companyName: string): void {
    this.companyName = companyName;
  }
}

const company: Company = new Company("Google");
console.log(company.getCompanyName());
company.setCompanyName("Facebook");
company.setCompanyName("Apple");
console.log(company.getCompanyName());
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
