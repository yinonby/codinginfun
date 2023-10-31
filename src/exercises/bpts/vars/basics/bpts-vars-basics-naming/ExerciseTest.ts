import ExerciseTestAdapter from "../../../../ExerciseTestAdapter";
import Exercise from "./Exercise";

export default class Test implements ExerciseTestAdapter {

    verify() {
        this.verifySolution();
    }

    run() {
        this.runSolution();
    }

    solution(): void {
        // line 1
        const zero: number = 0;
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
