
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
Declare a <<for>> loop as follows:
- **Initialization**: a non-constant variable <<i>> of type <<number>>, initialized
to <<3>>.
- **Condition**: continue as long as <<i>> is less than or equal to <<4>>.
- **Instruction**: increment <<i>> by <<1>>.
- **Content**: print the value of <<i>> to the output.
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
