
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import ExerciseInfo from "./coding-1/ExerciseInfo";
import ExerciseTest from "./coding-1/ExerciseTest";

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
    return "Retrieving the array size";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}