import ExerciseTestAdapter from "../../../../../ExerciseTestAdapter";
import Exercise from "./Exercise";

export default class Test implements ExerciseTestAdapter {
  
  run() {
    this.verifyFoo();
  }

  solution(): void {
    // line 1
    const x: number = 10;
  }

  verifyFoo() {
    const exercise: Exercise = new Exercise();
    if (exercise.solution.toString() !== this.solution.toString()) {
      throw new Error(
        "Did you declare the variable with the correct value?"
      );
    }
  }
}
