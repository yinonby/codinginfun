import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

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

    getInstructions(): string[] {
        return [
            "In the first line, Declare a method (function) named 'foo', followed by an opening bracket '{'.",
            "Then, in the next line, begin with 4 spaces, then print '\"Inside foo\"' to the output (console). Don't forget a semi-colon ';' at the end of the line.",
            "Then, in the next line, close the method using a closing bracket '}'",
        ];
    }
    
}
