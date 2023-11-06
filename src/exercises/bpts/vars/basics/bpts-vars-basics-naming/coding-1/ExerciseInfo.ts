import ExerciseInfoAbs, { EX_TYPE } from "../../../../../ExerciseInfoAbs";

const md: string = `
- Your declaration should come in the line below 'line 1'.

- Declare a constant variable named <<zero>>, of type <<number>>, and initialize its value to <<0>>.
`;

export default class ExerciseInfo extends ExerciseInfoAbs {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getDescription(): string {
        return "Giving variables meaningful names";
    }   

    getMdInstructions(): string {
        return md;
    }

}
