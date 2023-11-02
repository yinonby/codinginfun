import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

const md: string = `
- Your declaration should come in the line below 'line 1'.
- Declare a constant variable named <<bookName>>, of type <<string>>, and initialize its value to <<"Harry Potter">>.
- Then, print the value of this variable to the output (console).
`;

export default class ExerciseInfo implements ExerciseInfoAdapter {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getTitle(): string {
        return "String variables";
    }

    getMainInstruction(): string {
        return "In this exercise, you need to declare a string variable.";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
