import ExerciseInfoAdapter from "../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
      return "Variables types - string";
    }
  
    getMainInstruction(): string {
      return "In this exercise, you need to declare a string variable.";
    }
  
    getInstructions(): string[] {
      return [
        "Your declaration should come in the line below 'line 1'.",
        "Declare a constant variable named 'bookName', of type string, and initialize its value to 'Harry Potter'.",
      ];
    }
  }
  