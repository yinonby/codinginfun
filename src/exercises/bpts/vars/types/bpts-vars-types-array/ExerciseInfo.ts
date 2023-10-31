import ExerciseInfoAdapter from "../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
        return "Array variables";
    }

    getMainInstruction(): string {
        return "In this exercise, you need to declare an array of numbers variable.";
    }

    getInstructions(): string[] {
        return [
            "Your declaration should come in the line below 'line 1'.",
            "Declare a constant variable named 'someOddNumbers', of type array of numbers (number[]), and initialize its value to '[1, 3, 5]'.",
            "Then, in the next line, print the value of the size of the array to the output (console).",
            "Then, in the next line, print the first element of the array to the output (console).",
            "Then, in the next line, print the second element of the array to the output (console).",
            "Then, in the next line, print the third element of the array to the output (console).",
        ];
    }
}
