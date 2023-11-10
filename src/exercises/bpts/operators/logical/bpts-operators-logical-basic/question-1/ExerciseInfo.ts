
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../../infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const isFast: boolean = true;
const isFurious: boolean = false;
const isSlowOrFurious: boolean = !isFast || isFurious;
console.log(isSlowOrFurious);

Remember that each print to output (console) is printed on a separate line.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_QUESTION;
    }

    getDescription(): string {
        return "Assignment operators";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
