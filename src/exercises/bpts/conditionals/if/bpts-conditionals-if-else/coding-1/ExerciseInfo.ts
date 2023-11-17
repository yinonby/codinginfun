
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a method <<printSunStatus()>> that receives a variable
<<isSunShining>> of type <<boolean>>.

Tasks:
- Replace the placeholder <<#1#>> with the correct keyword,
so that <<"The sun has set!">> is printed to the output \
if and only if the value of <<isSunShining>> is <<false>>.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "Single method parameter";
  }

  getMdInstructions(): string {
    return md;
  }

}
