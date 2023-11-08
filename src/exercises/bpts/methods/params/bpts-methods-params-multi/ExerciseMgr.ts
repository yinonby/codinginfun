
import ExerciseMgrAbs from "../../../../../infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "../../../../../infra/task/ExerciseTask";
import ExerciseInfo from "./coding-1/ExerciseInfo";
import ExerciseTest from "./coding-1/ExerciseTest";
import Coding2ExerciseInfo from "./coding-2/ExerciseInfo";
import Coding2ExerciseTest from "./coding-2/ExerciseTest";
import Question1ExerciseInfo from "./question-1/ExerciseInfo";
import Question1ExerciseTest from "./question-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
    private exerciseTasks: ExerciseTask[] = [];

    constructor() {
        super();
        this.exerciseTasks.push(new ExerciseTask(
            new ExerciseInfo(),
            new ExerciseTest(),
        ));
        this.exerciseTasks.push(new ExerciseTask(
            new Coding2ExerciseInfo(),
            new Coding2ExerciseTest(),
        ));
        this.exerciseTasks.push(new ExerciseTask(
            new Question1ExerciseInfo(),
            new Question1ExerciseTest(),
        ));
    }

    getTitle(): string {
        return "Passing multiple parameters to methods";
    }

    getTasks(): ExerciseTask[] {
        return this.exerciseTasks;
    }

}