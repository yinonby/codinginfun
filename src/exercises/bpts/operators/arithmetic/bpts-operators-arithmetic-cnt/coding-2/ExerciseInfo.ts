
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
- In this exercise, we declared a non-constant variable named <<x>>
of type <<number>>, and initialized it with <<7>>.

- Then we declared another non-constant variable named <<y>> of type <<number>>,
and left a question mark <<?>> instead of initializing it.

- Your task is to decrement <<x>> by <<1>>, while initializing <<y>> with
the new value of <<x>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_CODING;
    }

    getDescription(): string {
        return "Subtraction, multiplication, and division operators";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
