
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a method <<printZeroTillNum>> that has an input
parameter <<n>> of type <<number>>.

**Your tasks:**
- Replace the first placeholder <<#1#>> with
an operator, so that <<printZeroTillNum>> prints all numbers
from <<0>> till the value of <<n>>, **including** <<n>>.
- Then, replace the second placeholder <<#2#>> with a number so that
the code prints all numbers from <<0>> to <<544>>, **not including** <<544>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
