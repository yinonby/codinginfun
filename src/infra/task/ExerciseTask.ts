
import ExerciseInfoAbs, { EX_TYPE } from "../info/ExerciseInfoAbs";
import ExerciseTestAbs from "../test/ExerciseTestAbs";

export default class ExerciseTask {
    private exerciseInfo: ExerciseInfoAbs;
    private exerciseTest: ExerciseTestAbs;

    constructor(exerciseInfo: ExerciseInfoAbs, exerciseTest: ExerciseTestAbs) {
        this.exerciseInfo = exerciseInfo;
        this.exerciseTest = exerciseTest;
    }

    getInfo(): ExerciseInfoAbs {
        return this.exerciseInfo;
    }

    getTest(): ExerciseTestAbs {
        return this.exerciseTest;
    }

}