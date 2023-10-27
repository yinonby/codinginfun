import ExerciseInfoAdapter from "../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
      return "Variables - basic 2";
    }
  
    getInstructions(): string[] {
      return [
        "In this exercise, you need to declare a variable and then change its value.",
        "Your declaration should come in the line below 'line 1'.",
        "Declare a non-constant variable named 'someValue', of type number, and initialize its value to 3.",
        "Then, in move to a new line, and change the variable value to 8."
      ];
    }
  }
  