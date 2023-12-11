
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import Coding1ExerciseInfo from "./coding-1/ExerciseInfo";
import Coding1ExerciseTest from "./coding-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new Coding1ExerciseInfo(),
      new Coding1ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Removing array items";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}