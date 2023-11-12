
import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

> const x: number = 4;
const y: number = 4;
console.log(x === y);
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
