
import ExerciseMgrAbs from "#infra/mgr/ExerciseMgrAbs";
import ExerciseTask from "#infra/task/ExerciseTask";
import ExerciseInfo from "./coding-1/ExerciseInfo";
import ExerciseTest from "./coding-1/ExerciseTest";
import Mc1ExerciseInfo from "./mc-1/ExerciseInfo";
import Mc1ExerciseTest from "./mc-1/ExerciseTest";
import Mc2ExerciseInfo from "./mc-2/ExerciseInfo";
import Mc2ExerciseTest from "./mc-2/ExerciseTest";
import Mc3ExerciseInfo from "./mc-3/ExerciseInfo";
import Mc3ExerciseTest from "./mc-3/ExerciseTest";
import Sandbox1ExerciseInfo from "./sandbox-1/ExerciseInfo";
import Sandbox1ExerciseTest from "./sandbox-1/ExerciseTest";

export default class ExerciseMgr extends ExerciseMgrAbs {
  private exerciseTasks: ExerciseTask[] = [];

  constructor() {
    super();
    this.exerciseTasks.push(new ExerciseTask(
      new ExerciseInfo(),
      new ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Mc1ExerciseInfo(),
      new Mc1ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Mc2ExerciseInfo(),
      new Mc2ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Mc3ExerciseInfo(),
      new Mc3ExerciseTest(),
    ));
    this.exerciseTasks.push(new ExerciseTask(
      new Sandbox1ExerciseInfo(),
      new Sandbox1ExerciseTest(),
    ));
  }

  getTitle(): string {
    return "Abstract inheritance";
  }

  getTasks(): ExerciseTask[] {
    return this.exerciseTasks;
  }

}