import ExerciseTestAdapter from "../../../ExerciseTestAdapter";
import Exercise from "./Exercise";

export default class Test implements ExerciseTestAdapter {

  run() {
    this.verifyFoo();
  }

  foo(): void {
    // line 1
    const zero: number = 0;
  }

  verifyFoo() {
    const exercise: Exercise = new Exercise();
    if (exercise.foo.toString() !== this.foo.toString()) {
      throw new Error(
        "Did you declare the variable with the correct value?"
      );
    }
  }

}
