import ExerciseInfoAdapter from "../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
        return "Boolean variables";
    }

    getMainInstruction(): string {
        return "In this exercise, you need to declare a boolean variable.";
    }

    getInstructions(): string[] {
        return [
            "Your declaration should come in the line below 'line 1'.",
            "Declare a constant variable named 'isGreen', of type boolean, and initialize its value to 'true'.",
            "Then, print the value of this variable to the output (console).",
        ];
    }
}
