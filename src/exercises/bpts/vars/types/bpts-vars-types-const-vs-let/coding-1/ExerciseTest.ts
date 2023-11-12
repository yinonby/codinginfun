import RunnableCodingExerciseTestAbs from "#infra/test/RunnableCodingExerciseTestAbs";
import Exercise from "../Exercise";

export default class Test extends RunnableCodingExerciseTestAbs {

  verify() {
    this.verifySolution();
  }

  run() {
    this.runSolution();
  }

  getExpectedSolutionText(): string {
    return this.solution.toString();
  }

  solution(): void {
    // line 1
    const paiValue: number = 3.14;
    console.log(paiValue);
    let myAge: number = 35;
    console.log(myAge);
    myAge = 36;
    console.log(myAge);
  }

  verifySolution() {
    const exercise: Exercise = new Exercise();

    if (exercise.solution.toString() !== this.solution.toString()) {
      throw new Error(
        "Did you declare the variable with the correct value?"
      );
    }
  }

  runSolution() {
    const exercise: Exercise = new Exercise();

    try {
      exercise.solution();
    } catch (e) {
      throw new Error(
        "Error running your code."
      );
    }
  }
}
