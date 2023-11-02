import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }

    getTitle(): string {
        return "Changing variables' values";
    }

    getMainInstruction(): string {
        return "In this exercise, you need to declare a variable and then change its value.";
    }

    getInstructions(): string[] {
        return [
            "Your declaration should come in the line below 'line 1'.",
            "Declare a non-constant variable named 'someValue', of type number, and initialize its value to 3.",
            "Then, move to a new line (by pressing Enter), and change the variable value to 8."
        ];
    }
}
