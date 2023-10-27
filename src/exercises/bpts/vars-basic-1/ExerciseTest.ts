import ExerciseTestAdapter from "../../../ExerciseTestAdapter";
import Exercise from "./Exercise";

export default class Test implements ExerciseTestAdapter {
  run() {
    this.verifyFoo();
  }

  verifyFoo() {
    const exercise: Exercise = new Exercise();
    const res: number = exercise.foo();

    if (res === -1) {
      throw new Error(
        "Did you forget to change line 2?"
      );
    }
    if (res !== 10) {
      throw new Error(
        "Did you declare the variable with the correct value?"
      );
    }
  }
}
