import ExerciseInfoAbs, { EX_TYPE } from "#infra/info/ExerciseInfoAbs";

const md: string = `
- Your declaration should come in the line below 'line 1'.

- Declare a non-constant variable named <<someValue>>, of type <<number>>, and initialize its value to <<3>>.

- Then, move to a new line (by pressing Enter), and change the variable value to <<8>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getDescription(): string {
        return "In this exercise, you need to declare a variable and then change its value.";
    }

    getMdInstructions(): string {
        return md;
    }

}
