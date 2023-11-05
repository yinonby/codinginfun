
import ExerciseInfoAbs, { EX_TYPE } from "./ExerciseInfoAbs";
import ExerciseTestAdapter from "./ExerciseTestAdapter";
import TextExerciseTestAdapter from "./TextExerciseTestAdapter";

export default class ExerciseTask {
    private exerciseInfo: ExerciseInfoAbs;
    private exerciseTestAdapter: ExerciseTestAdapter | TextExerciseTestAdapter;

    constructor(exerciseInfo: ExerciseInfoAbs,
        exerciseTestAdapter: ExerciseTestAdapter | TextExerciseTestAdapter) {
        this.exerciseInfo = exerciseInfo;
        this.exerciseTestAdapter = exerciseTestAdapter;
    }

    getInfo(): ExerciseInfoAbs {
        return this.exerciseInfo;
    }

    getTest(): ExerciseTestAdapter | TextExerciseTestAdapter {
        return this.exerciseTestAdapter;
    }

}