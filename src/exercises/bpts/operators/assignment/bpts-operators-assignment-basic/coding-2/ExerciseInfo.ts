
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
- We declared a non-constant variable named <<x>> of type <<number>>,
and initialized it with <<3>>.

- Your task is to replace the first question mark <<?>>: add <<9>> to <<x>>,
and assign the result back to <<x>> (use Addition-Assignment <<+=>> operator).

- Then, replace the second question mark <<?>>: divide <<x>> by <<3>>, and
assign the result back to <<x>> (use the Division-Assignment operator <</=>>).
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_CODING;
    }

    getDescription(): string {
        return "Assignment operators";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
