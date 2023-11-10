
import ExerciseMgrAbs from "../../../../../infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "../../../../../infra/task/ExerciseTask";
import Question1ExerciseInfo from "./question-1/ExerciseInfo";
import Question1ExerciseTest from "./question-1/ExerciseTest";
import Question2ExerciseInfo from "./question-2/ExerciseInfo";
import Question2ExerciseTest from "./question-2/ExerciseTest";
import Question3ExerciseInfo from "./question-3/ExerciseInfo";
import Question3ExerciseTest from "./question-3/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
    private exerciseTasks: ExerciseTask[] = [];

    constructor() {
        super();
        this.exerciseTasks.push(new ExerciseTask(
            new Question1ExerciseInfo(),
            new Question1ExerciseTest(),
        ));
        this.exerciseTasks.push(new ExerciseTask(
            new Question2ExerciseInfo(),
            new Question2ExerciseTest(),
        ));
        this.exerciseTasks.push(new ExerciseTask(
            new Question3ExerciseInfo(),
            new Question3ExerciseTest(),
        ));
    }

    getTitle(): string {
        return "Comparison operators";
    }

    getTasks(): ExerciseTask[] {
        return this.exerciseTasks;
    }

}