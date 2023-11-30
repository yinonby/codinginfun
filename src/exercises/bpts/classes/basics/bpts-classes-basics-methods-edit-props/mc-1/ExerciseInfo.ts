
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Is the following code valid?

>>>>
class School {
  constructor(public schoolName: string, public studentsNum: number) {
  }

  public getStudentsNum(): number {
    return this.studentsNum;
  }

  public setStudentsNum(newStudentsNum: number): void {
    this.studentsNum = newStudentsNum;
  }
}

const school: School = new School("Springfield Primary", 120);
school.setStudentsNum(130);
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
