import ExerciseInfoAdapter from "../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
      return "Variables - basic";
    }
  
    getInstructions(): string[] {
      return [
        "In this exercise, you need to declare a variable.",
        "Your declaration should come in the line below 'line 1'",
        "Declare a constant variable named 'x', of type number, and initialize its value to 10.",
        "Then, below 'line 2', change '-1' to 'x'"
      ];
    }
  }
  