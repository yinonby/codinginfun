
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import MC1ExerciseInfo from "./mc-1/ExerciseInfo";
import MC1ExerciseTest from "./mc-1/ExerciseTest";
import MC2ExerciseInfo from "./mc-2/ExerciseInfo";
import MC2ExerciseTest from "./mc-2/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new MC1ExerciseInfo(),
      new MC1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new MC2ExerciseInfo(),
      new MC2ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "External member properties vs internal member properties";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}