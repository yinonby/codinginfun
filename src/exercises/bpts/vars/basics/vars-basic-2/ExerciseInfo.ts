import ExerciseInfoAdapter from "../../../../../ExerciseInfoAdapter";

export default class ExerciseInfo implements ExerciseInfoAdapter {
    getTitle(): string {
      return "Variables basics - giving meaningful names";
    }
  
    getMainInstruction(): string {
      return "In this exercise, you need to declare a variable and give it a meaningful name.";
    }
  
    getInstructions(): string[] {
      return [
        "Your declaration should come in the line below 'line 1'.",
        "Declare a constant variable named 'zero', of type number, and initialize its value to 0.",
      ];
    }
  }
  