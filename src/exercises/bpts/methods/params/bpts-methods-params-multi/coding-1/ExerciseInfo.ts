
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
- Write a method <<printFullName>>.

- The method is given 2 parameters.

- The first parameter <<firstName>> is of type <<string>>.

- The second parameter <<lastName>> is of type <<string>>.

- The method prints the full name to the output (console), where the first
name and the last name are separated by a space (<<" ">>).

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
