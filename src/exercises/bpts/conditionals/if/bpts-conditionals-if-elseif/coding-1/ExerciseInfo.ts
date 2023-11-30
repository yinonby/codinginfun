
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Array variables have a built-in function called [<<includes()>>](
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
).
This function returns <<true>> if and only if the array contains an item
whose value is equal to the parameter passed to the <<includes()>> function.

For example:
>>>>
const arr: number[] = [1, 2, 3];
console.log(arr.includes(1)); // output: true
console.log(arr.includes(4)); // output: false
<<<<

Tasks:
- Replace the first placeholder <<#1#>> with the correct condition,
so that <<firstChoice>> is returned if and only if the array
<<availableMilkshakes>> contains an item whose value is equal to the
value of <<firstChoice>>.

- Replace the second placeholder <<#2#>> with the correct keywords,
so that <<secondChoice>> is returned if and only if the array
<<availableMilkshakes>> doesn't contain an item whose value is
equal to the value of <<firstChoice>>, but does contain an item
whose value is equal to the value of <<secondChoice>>.

- Don't forget to follow code conventions.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getMdInstructions(): string {
    return md;
  }

}
