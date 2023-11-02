import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

const md: string = `
- Your declaration should come in the line below 'line 1'.

- Declare a constant variable named <<x>>, of type <<number>>, and initialize its value to <<10>>.
`;

export default class ExerciseInfo implements ExerciseInfoAdapter {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getTitle(): string {
        return "Variables declaration";
    }

    getMainInstruction(): string {
        return "In this exercise, you need to declare a variable.";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
