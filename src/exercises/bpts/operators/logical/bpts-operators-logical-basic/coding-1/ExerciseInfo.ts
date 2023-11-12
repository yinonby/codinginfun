
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a constant variable named <<isFast>> of type <<boolean>>,
and initialized it with <<true>>.

- Your task is to replace the question mark <<?>>: declare a new constant
variable <<isFastAndFurious>> of type <<boolean>>, and initialize it
with the following expression: a Logical And operator <<&&>> that is
activated on the variable <<isFast>> as the left side operand,
and the variable <<isFurious>> as the right side operand.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

  getType(): EX_TYPE {
    return EX_TYPE.EX_TYPE_CODING;
  }

  getDescription(): string {
    return "Logical operators";
  }

  getMdInstructions(): string {
    return md;
  }

}
