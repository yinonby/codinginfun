
import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

const md: string = `
- In the first line, declare a method (function) named <<foo>>, followed by an opening bracket <<{>>.

- Then, in the next line, begin with 4 spaces, then print "<<Inside foo>>" to the output (console). Don't forget a semicolon <<;>> at the end of the line.

- Then, in the next line, close the method using a closing bracket <<}>>.
`;

export default class ExerciseInfo implements ExerciseInfoAdapter {

    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_TEXT;
    }

    getTitle(): string {
        return "Methods declaration";
    }

    getMainInstruction(): string {
        return "In this exercise, we'll practice a basic method declaration.";
    }

    getMdInstructions(): string {
        return md;
    }
    
}
