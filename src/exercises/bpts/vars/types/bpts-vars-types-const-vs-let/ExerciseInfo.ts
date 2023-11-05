import ExerciseInfoAbs, { EX_TYPE } from "../../../../ExerciseInfoAbs";
const md: string = `
- Your declaration should come in the line below 'line 1'.
- Declare a constant variable named <<paiValue>>, of type number, and initialize its value to <<3.14>>.
- Then, in the next line, print the value of <<paiValue>> to the output (console).
- Then, in the next line, declare a non-constant variable named <<myAge>>, of type <<number>>, and initialize its value to <<35>>.
- Then, in the next line, print the value of <<myAge>> to the output (console).
- Then, in the next line, change the value of <<myAge>> to <<36>>.
- Then, in the next line, print the value of <<myAge>> to the output (console).
`;

export default class ExerciseInfo extends ExerciseInfoAbs {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getDescription(): string {
        return "In this exercise, you will declare both 'const' and 'let' variables.";
    }

    getMdInstructions(): string {
        return md;
    }
}
