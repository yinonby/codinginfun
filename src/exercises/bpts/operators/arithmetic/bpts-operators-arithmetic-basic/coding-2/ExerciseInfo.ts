
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
- Declare a non-constant variable named <<result>> of type <<number>>,
and initialize it with <<44 - 24>>. The value of <<result>> is now 20.

- Then, change the value of <<result>> to <<3 * 1>>. The value of <<result>>
is now 3;

- Then, change the value of <<result>> to <<result * 100>>. The value of
<<result>> is now 300;
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
