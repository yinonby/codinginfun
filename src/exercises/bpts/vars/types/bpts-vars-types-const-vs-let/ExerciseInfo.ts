import ExerciseInfoAdapter, { EX_TYPE } from "../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    
    getType(): EX_TYPE {
        return EX_TYPE.EX_TYPE_SANDBOX;
    }
    
    getTitle(): string {
        return "Constant vs non-constant variables";
    }

    getMainInstruction(): string {
        return "In this exercise, you will declare both 'const' and 'let' variables.";
    }

    getInstructions(): string[] {
        return [
            "Your first declaration should come in the line below 'line 1'.",
            "Declare a constant variable named 'paiValue', of type number, and initialize its value to '3.14''.",
            "Then, in the next line, print the value of 'someThingsNeverChangeVar' to the output (console).",
            "Then, in the next line, declare a non-constant variable named 'myAge', of type number, and initialize its value to '35'.",
            "Then, in the next line, print the value of 'myAge' to the output (console).",
            "Then, in the next line, change the value of 'myAge' to '36'.",
            "Then, in the next line, print the value of 'myAge' to the output (console).",
        ];
    }
}
