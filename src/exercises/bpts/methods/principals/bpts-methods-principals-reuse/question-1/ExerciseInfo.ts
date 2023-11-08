
import ExerciseInfoAbs, { EX_TYPE } from "../../../../../ExerciseInfoAbs";

const md: string = `
What is the expected output of the following code?

// section 1: when code is duplicated
> console.log((2 + 6) / 2);
console.log((1 + 5) / 2);
console.log((2 + 5) / 2);
 
// section 2: when code is not duplicated
function getMedian(x: number, y: number): number {
    return (x + y) / 2;
}
console.log(getMedian(2, 6));
console.log(getMedian(1, 5));
console.log(getMedian(2, 5));
`;

export default class ExerciseInfo extends ExerciseInfoAbs {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_QUESTION;
    }

    getDescription(): string {
        return "Simple method declaration";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
