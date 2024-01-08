
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the output of the following code?

>>>>
class School {
  constructor(public schoolName: string, public studentsNum: number) {
  }

  public getStudentsNum(): number {
    return this.studentsNum;
  }

  public addStudents(studentsNumToAdd: number): void {
    this.studentsNum += studentsNumToAdd;
  }
}

const school: School = new School("Springfield Primary", 120);
console.log(school.getStudentsNum());
school.addStudents(130);
console.log(school.getStudentsNum());
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
