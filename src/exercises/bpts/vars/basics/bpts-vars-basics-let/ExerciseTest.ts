import ExerciseTestAdapter from "../../../../ExerciseTestAdapter";
import Exercise from "./Exercise";

export default class Test implements ExerciseTestAdapter {

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
        let someValue: number = 3;
        someValue = 8;
    }

    verifySolution() {
        const exercise: Exercise = new Exercise();

        if (exercise.solution.toString() !== this.solution.toString()) {
            throw new Error(
                "Did you declare the variable with the correct value? Did you change it to the new value?"
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
