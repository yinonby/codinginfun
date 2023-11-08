
import ExerciseInfoAbs, { EX_TYPE } from "./ExerciseInfoAbs";
import ExerciseTestAdapter from "./ExerciseTestAdapter";
import QuestionExerciseTestAdapter from "./QuestionExerciseTestAdapter";
import TextExerciseTestAdapter from "./TextExerciseTestAdapter";

export default class ExerciseTask {
    private exerciseInfo: ExerciseInfoAbs;
    private exerciseTestAdapter: ExerciseTestAdapter | TextExerciseTestAdapter |
        QuestionExerciseTestAdapter;

    constructor(exerciseInfo: ExerciseInfoAbs,
        exerciseTestAdapter: ExerciseTestAdapter | TextExerciseTestAdapter |
            QuestionExerciseTestAdapter) {
        this.exerciseInfo = exerciseInfo;
        this.exerciseTestAdapter = exerciseTestAdapter;
    }

    getInfo(): ExerciseInfoAbs {
        return this.exerciseInfo;
    }

    getTest(): ExerciseTestAdapter | TextExerciseTestAdapter |
        QuestionExerciseTestAdapter {
        return this.exerciseTestAdapter;
    }

}