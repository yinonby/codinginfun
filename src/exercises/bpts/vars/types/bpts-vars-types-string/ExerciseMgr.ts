
import ExerciseMgrAbs from "../../../../ExerciseMgrAbs";
import ExerciseTask from "../../../../ExerciseTask";
import ExerciseInfo from "./ExerciseInfo";
import ExerciseTest from "./ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
    private exerciseTasks: ExerciseTask[] = [];

    constructor() {
        super();
        this.exerciseTasks.push(new ExerciseTask(
            new ExerciseInfo(),
            new ExerciseTest(),
        ));
    }

    getTitle(): string {
        return "String variables";
    }

    getTasks(): ExerciseTask[] {
        return this.exerciseTasks;
    }

}