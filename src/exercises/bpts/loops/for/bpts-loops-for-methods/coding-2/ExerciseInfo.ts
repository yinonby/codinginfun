
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared an array <<fruitNames>>, containing names of fruits.
- Then, we declared a method <<doesFruitExist>> that has an input
parameter <<fruitName>> of type <<string>>, and return value type
of <<boolean>>.

**Your tasks:**
- Replace the first placeholder <<#1#>> with
an operator, so that <<doesFruitExist>> iterates over all elements
of the <<fruitNames>> array.
- Then, replace the second placeholder <<#2#>> so that the method
returns <<true>> if an array element was found with the same value as
the input parameter <<fruitName>>.
- Then, replace the third placeholder <<#3#>>, so that if no such
element is found, the method returns <<false>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "'For' loops";
  }

  getMdInstructions(): string {
    return md;
  }

}
